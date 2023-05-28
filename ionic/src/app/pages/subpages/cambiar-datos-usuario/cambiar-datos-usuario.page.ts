import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Preferences} from "@capacitor/preferences";
import {DataService} from "../../../services/data.service";
import {AlertController, ToastController} from "@ionic/angular";
import {User} from "../../../common/User";

@Component({
  selector: 'app-cambiar-datos-usuario',
  templateUrl: './cambiar-datos-usuario.page.html',
  styleUrls: ['./cambiar-datos-usuario.page.scss'],
})
export class CambiarDatosUsuarioPage implements OnInit {

  constructor(protected router: Router, private dataService: DataService, private alertController: AlertController, private toastController: ToastController) { }

  contrasenya:any;
  telefono: any;
  email:any;

  ngOnInit() {
    this.cargarDatos();
  }

  async cargarDatos(){
    let idUser: string='';
    let userJson
    await Preferences.get({key: 'user'}).then(data => userJson = data.value)
    if (userJson != undefined){
      idUser = userJson
    }
    this.dataService.getUser(idUser).subscribe(
      {next: value => {
        this.email = value.email
          this.contrasenya = value.contrasenya
          this.telefono = value.telefono
        }
      }
    )
  }

  async guardarCambios (){

  }

   async restablecerContrasenya() {

    let oldPasswordInput = document.getElementById("oldPassword") as HTMLInputElement
    let newPasswordInput = document.getElementById("newPassword") as HTMLInputElement
    let newPasswordConfirmInput = document.getElementById("newPasswordConfirm") as HTMLInputElement

     const updatedUserDto: Partial<User> = {
       contrasenya : newPasswordInput.value
     };

    if(oldPasswordInput.value == this.contrasenya && newPasswordInput.value == newPasswordConfirmInput.value && newPasswordInput.value != oldPasswordInput.value){
      let idUser: string='';
      let userJson
      await Preferences.get({key: 'user'}).then(data => userJson = data.value)
      if (userJson != undefined){
        idUser = userJson
      }
      this.dataService.updateUser(idUser,updatedUserDto).subscribe(
        {next: value => {
            this.contrasenya = value.contrasenya
          }
        }
      )
      const toast = await this.toastController.create({
        message: 'Tu contraseña ha sido cambiada',
        duration: 1500,
        position: 'bottom',
      });

      await toast.present();
    } else {
      let alert;
      if(newPasswordInput.value == oldPasswordInput.value){
         alert = await this.alertController.create({
          message: 'Tu nueva contraseña debe ser distinta a la anterior',
          buttons:["OK"],
        })
      }else{
        alert = await this.alertController.create({
          message: 'Debes confirmar tu nueva contraseña correctamente',
          buttons:["OK"],
        })
      }

        await alert.present();
      }
  }

  async restablecerContrasenyaAlert(){
    const alert = await this.alertController.create({
        header: 'Cambiar contraseña',
        message: 'This is an alert!',
        buttons: [{
          text: "modificar",
          role: "confirm",
          handler: value => {
            this.restablecerContrasenya();
          }
        }],
        inputs: [
          {
            name: 'oldPassword',
            id: 'oldPassword',
            type: 'password'
          },
          {
            name: 'newPassword',
            id: 'newPassword',
            type: 'password',
          },
          {
            name: 'newPasswordConfirm',
            id: 'newPasswordConfirm',
            type: 'password'
          }
        ]
      });
    await alert.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";
import {User} from "../../common/User";
import {Preferences} from "@capacitor/preferences";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private dataService: DataService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }


  //FUNCION PARA ENVIAR LOS PROBLEMAS
  async updateProblem(problema: string) {
    const updatedUserDto: Partial<User> = {
      info_problemas: [problema]
    };
    let userJson
    await Preferences.get({key: 'user'}).then(data => userJson = data.value)
    let idUser: any;
    if (userJson != undefined){
      idUser = JSON.parse(userJson).id;
      //faltaria tener el id del usuario y ponerlo en "idUser"
      this.dataService.updateUser(idUser, updatedUserDto).subscribe(
        () => {
          console.log('Problema enviado con éxito');
        },
        (error) => {
          console.error('Error al enviar el problema', error);
        }
      );
    }
    else {
      let toast = await this.toastController.create({
        message: "Ha habido un error",
        duration: 2000,
        position: 'bottom'
      })
      await toast.present()
    }
  }


  //FUNCION PARA BORRAR LA CUENTA
  deleteUser(idUser: string): void {
    this.dataService.deleteUser(idUser).subscribe(
      () => {
        console.log('Usuario eliminado con éxito');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al eliminar el usuario', error);
      }
    );
  }



}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Preferences} from "@capacitor/preferences";
import {User} from "../../../common/User";
import {DataService} from "../../../services/data.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-activar-verificacion',
  templateUrl: './activar-verificacion.page.html',
  styleUrls: ['./activar-verificacion.page.scss'],
})
export class ActivarVerificacionPage implements OnInit {

  user: User | undefined;

  email:any;
  telefono:any;

  constructor(protected router: Router, private dataservice: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.cargarDatos();
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: "Tu cuenta ha sido verificada",
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  async mostrarToastError() {
    const toast = await this.toastController.create({
      message: "No se ha podido verificar la cuenta",
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async cargarDatos(){
    let idUser: string='';
    let userJson
    await Preferences.get({key: 'user'}).then(data => userJson = data.value)
    if (userJson != undefined){
      idUser = userJson
    }
    this.dataservice.getUser(idUser).subscribe(
      (user: User) => {
        this.user = user;
        console.log('Usuario:', this.user);
      },
      (error) => {
        console.error('Error al cargar el usuario:', error);
      }
    );
  }

  verificarDatos() {
    console.log(this.telefono);
    if(this.telefono == this.user?.telefono && this.email == this.user?.email){
      this.mostrarToast();
    }else {
      this.mostrarToastError();
    }
  }

}

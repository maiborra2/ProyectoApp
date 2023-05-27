import { Component, OnInit } from '@angular/core';
import { DataService} from "../../../services/data.service";
import { User} from "../../../common/User";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombre: string = '';
  apellido1: string = '';
  apellido2: string = '';
  email: string = '';
  dni: string = '';
  telefono: string = '';
  contrasenya: string = '';

  constructor(private dataService: DataService, private toastController: ToastController) {}

  ngOnInit() {}

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  registrarUsuario() {
    if (
      !this.nombre ||
      !this.apellido1 ||
      !this.apellido2 ||
      !this.email ||
      !this.dni ||
      !this.telefono ||
      !this.contrasenya
    ) {
      this.mostrarToast('Por favor, complete todos los campos.');
      return;
    }

    const newUser: User = {
      dni: this.dni,
      nombre: this.nombre,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      email: this.email,
      telefono: this.telefono,
      cuenta_bancaria: '',
      fecha_registro: 0,
      info_problemas: [],
      contrasenya: this.contrasenya,
      inicio_sesion: false,
      direccion_usuario: [{
        tipoVia: '',
        calle: '',
        numero: '',
        puerta: '',
        ciudad: '',
        provincia: '',
        cp: 0,
        pais: ''
      }],
      plan: {
        ahorro: false,
        estandard: false,
        premium: false,
        classic: false,
        oficina: false
      },
      facturas: []
    };

    this.dataService.createUser(newUser).subscribe(
      (createdUser) => {
        console.log('Usuario creado:', createdUser);
      },
      (error) => {
        console.error('Error al crear el usuario:', error.message);
        console.error('Detalles del error:', error.error);
      }
    );
  }

}

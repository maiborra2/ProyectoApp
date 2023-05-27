import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Preferences} from "@capacitor/preferences";
import {AlertController, ToastController} from "@ionic/angular";
import {User} from "../../../common/User";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-mod-datos',
  templateUrl: './mod-datos.page.html',
  styleUrls: ['./mod-datos.page.scss'],
})
export class ModDatosPage implements OnInit {
  cambiarCuentaButtons = [
    {
      text: "Cambiar",
      role: "confirm",
      handler: () => {
        this.cambiarCuenta((document.getElementById('dni') as HTMLInputElement).value)
      }
    }
  ]

  constructor(protected router: Router,
              private alertController: AlertController,
              private dataService: DataService,
              private toastController: ToastController) {
  }


  ngOnInit() {
  }

  async comprobarDni() {
    let dni
    let userJson
    await Preferences.get({key: 'user'}).then(data => userJson = data)
    console.log(userJson)
    dni = JSON.parse((userJson)!).dni

    if (dni.equals((document.getElementById('dni') as HTMLInputElement).value)) {
      await this.cambiarCuentaAlert();
    }


  }

  async cambiarCuentaAlert() {
    const alert = await this.alertController.create({
      header: "¿Quieres eliminar tu cuenta de la App?",
      message: "Esta acción no tiene marcha atrás",
      buttons: this.cambiarCuentaButtons
    })
  }

  async cambiarCuenta(cuenta: string) {
    const updatedUserDto: Partial<User> = {
      cuenta_bancaria: cuenta
    };
    let idUser
    let userJson
    await Preferences.get({key: 'user'}).then(data => userJson = data)
    if (userJson != undefined) {
      idUser = JSON.parse(userJson).id
      //faltaria tener el id del usuario y ponerlo en "idUser"
      this.dataService.updateUser(idUser, updatedUserDto).subscribe(
        () => {
          console.log('Dni cambiado con éxito con éxito');
        },
        (error) => {
          console.error('Error al enviar el problema', error);
        }
      );
    } else {
      let toast = await this.toastController.create({
        message: "Ha habido un error",
        duration: 2000,
        position: "bottom"
      })

      await toast.present()
    }
  }


}

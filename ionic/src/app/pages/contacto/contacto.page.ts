import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

function locateElement(value: string) {
  console.log("locateelement")
  let element = document.getElementById(value)
  console.log(element)
  if (element != null) {
    return element;
  }
  return null;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  infoShown: Number = -1;

  ids = ["telefono", "correo", "oficinas", "faq"]

  items = [
    {
      question: "¿Como cambio la contraseña?",
      answer: "Ves a la pestaña de Perfil, y selecciona la opción de "
    },
    {
      question: "¿Como modifico datos bancarios?",
      answer: "Ves a la pestaña de Gestión y selecciona la opción de Modificar datos bancarios"
    },
    {
      question: "¿Como compruebo si se ha cobrado una factura?",
      answer: "Ves a la pestaña de Gestión y selecciona la opción de Pago de Facturas"
    },
    {
      question: "¿Como me doy de baja como usuario?",
      answer: "Ves a la pestaña de Perfil y selecciona la opción de Solicitar eliminación de la cuenta"
    },
    {
      question: "¿Como cambio mi plan de energia?",
      answer: "Ves a la pestaña de Gestión y selecciona la opción de Cambiar Plan"
    },

  ]

  constructor(protected router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async showAlert(question: string, answer: string) {
    const alert = await this.alertController.create({
      header: question,
      message: answer,
      buttons: ['OK'],
    });

    await alert.present();
  }

  showInfo(id: string) {
    console.log(this.infoShown)
    console.log("showinfo")
    if (this.infoShown != -1) {
      this.ids.forEach(function (value) {
        let element = locateElement(value)
        if (element != null) {
          element.style.display = "none"
        }
      })
    }

    let element = locateElement(id)
    if (element != null) {
      element.style.display = "block"
    }

    this.infoShown = this.ids.indexOf(id);
  }
}

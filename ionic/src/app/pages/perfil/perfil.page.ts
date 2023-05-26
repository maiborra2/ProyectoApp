import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  eliminarCuentaButtons = [

    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'OK',
      role: 'confirm',
    },
  ]
  informarProblemaInputs = [
    {
      type: 'textarea',
      placeholder: 'Escriba su reclamación',
    }
  ]
  informarProblemaButtons = [
    {
      text: 'Enviar informe',
      role: 'confirm',
      handler: () => {
      },
    }
  ]
  politicaPrivacidad = "Política de privacidad\n" +
    "\n" +
    "Esta política de privacidad describe cómo se recopila, utiliza y comparte la información personal de los usuarios de nuestra aplicación móvil. Al utilizar nuestra aplicación, aceptas las prácticas descritas en esta política.\n" +
    "\n" +
    "Información que recopilamos\n" +
    "\n" +
    "Recopilamos información personal que nos proporcionas directamente, como tu nombre, dirección, número de teléfono y dirección de correo electrónico. También podemos recopilar información sobre tu uso de la aplicación, como la fecha y hora de acceso, el tipo de dispositivo utilizado y la ubicación geográfica.\n" +
    "\n" +
    "Cómo utilizamos la información\n" +
    "\n" +
    "Utilizamos la información personal que recopilamos para proporcionar servicios a nuestros usuarios, como facturación y soporte técnico. También podemos utilizar esta información para mejorar nuestra aplicación y personalizar la experiencia del usuario.\n" +
    "\n" +
    "Cómo compartimos la información\n" +
    "\n" +
    "No vendemos ni alquilamos información personal a terceros con fines de marketing. Podemos compartir información personal con terceros que nos ayuden a proporcionar servicios a nuestros usuarios, como procesadores de pagos y proveedores de servicios en la nube. También podemos divulgar información personal si así lo exige la ley o si creemos que dicha divulgación es necesaria para proteger nuestros derechos o los derechos de otros usuarios.\n" +
    "\n" +
    "Cómo protegemos la información\n" +
    "\n" +
    "Utilizamos medidas de seguridad razonables para proteger la información personal contra el acceso no autorizado, la divulgación o el uso indebido. Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet.\n" +
    "\n" +
    "Cambios en esta política\n" +
    "\n" +
    "Podemos actualizar esta política de privacidad ocasionalmente. Si realizamos cambios significativos en la forma en que utilizamos la información personal, te lo notificaremos mediante una publicación destacada en nuestra aplicación o por correo electrónico.\n" +
    "\n" +
    "Contacto\n" +
    "\n" +
    "Si tienes preguntas o comentarios sobre esta política de privacidad, contáctanos a través de nuestra aplicación o por correo electrónico."

  cerrarSesionButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
      },
    },
  ]

  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "../../services/data.service";
import {Preferences} from "@capacitor/preferences";
import {User} from "../../common/User";
import {Factura} from "../../common/Factura";
import {AlertController} from "@ionic/angular";



@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {
  facturas: Factura[] = [];
  todasFacturas: Factura[] = [];
  //

  //esto es un cambio
  user: User | undefined;

  constructor(protected dataservice: DataService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.cargarDatos();
  }

  consumoAnualGrafica(){
    this.router.navigate(['/consumo-anual']);
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
        this.facturas = user.facturas;
        console.log('Usuario:', this.user);
        console.log('Facturas:', this.facturas);
        this.facturas = this.facturas.slice(-3);
        this.todasFacturas = this.facturas;
      },
      (error) => {
        console.error('Error al cargar el usuario:', error);
      }
    );
  }

  async buscarFacturaPorAnyoAlert(){
    const alert = await this.alertController.create({
      header: 'Buscar factura por año',
      buttons: [{
        text: "buscar",
        role: "confirm",
        handler: value => {
          console.log(value.anyoFactura)
          this.buscarFactura(value.anyoFactura);
        }
      }],
      inputs: [
        {
          name: 'anyoFactura',
          id: 'anyoFactura',
        }
      ]
    });
    await alert.present();
  }

  async buscarFactura(anyoFactura: string) {
    this.facturas = [];
   this.facturas = this.todasFacturas.filter((factura) => factura.anyo_factura.toString() == anyoFactura)
    console.log(this.facturas)
  }
}

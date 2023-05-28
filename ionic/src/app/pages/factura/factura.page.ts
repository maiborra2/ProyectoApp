import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "../../services/data.service";
import {Preferences} from "@capacitor/preferences";
import {User} from "../../common/User";
import {Factura} from "../../common/Factura";



@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {
  facturas: Factura[] = [];
  todasFacturas: Factura[] = [];

  //esto es un cambio
  user: User | undefined;

  constructor(protected dataservice: DataService, private router: Router) { }

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
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Preferences} from "@capacitor/preferences";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-consultar-datos',
  templateUrl: './consultar-datos.page.html',
  styleUrls: ['./consultar-datos.page.scss'],
})
export class ConsultarDatosPage implements OnInit {

  constructor(protected router: Router, private dataService: DataService) { }

  nombre:any;
  apellido1:any;
  apellido2:any;
  contrasenya:any;
  dni:any;
  email:any;
  telefono:any;
  fecha_registro:any;
  nombre_completo:any;

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
        this.nombre_completo = value.nombre+" "+value.apellido1+" "+value.apellido2
          this.email = value.email
          this.contrasenya = value.contrasenya
          this.telefono = value.telefono
          let date = new Date(value.fecha_registro*1000)
          this.fecha_registro = date.toDateString()
          this.dni = value.dni
        }
      }
    )
  }

}

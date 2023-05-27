import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.page.html',
  styleUrls: ['./incidencias.page.scss'],
})
export class IncidenciasPage implements OnInit {
  incidencias: any;

  constructor(protected router: Router, private dataService: DataService) { }

  ngOnInit() {

  }

  async getIncidencias() {
    let idUser
    let userJson
    await Preferences.get({key: 'user'}).then(data => userJson = data)
    if (userJson != undefined){
      idUser = JSON.parse(userJson).id
    }
    this.dataService.getUser(idUser).subscribe(
      {next: value => {
          this.incidencias = value.info_problemas
        }
      }
    )
  }

}

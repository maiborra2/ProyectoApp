import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-consultar-datos',
  templateUrl: './consultar-datos.page.html',
  styleUrls: ['./consultar-datos.page.scss'],
})
export class ConsultarDatosPage implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}

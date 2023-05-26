import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cambiar-datos-usuario',
  templateUrl: './cambiar-datos-usuario.page.html',
  styleUrls: ['./cambiar-datos-usuario.page.scss'],
})
export class CambiarDatosUsuarioPage implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}

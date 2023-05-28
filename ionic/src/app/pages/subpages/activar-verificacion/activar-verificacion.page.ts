import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-activar-verificacion',
  templateUrl: './activar-verificacion.page.html',
  styleUrls: ['./activar-verificacion.page.scss'],
})
export class ActivarVerificacionPage implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}

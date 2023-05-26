import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mod-datos',
  templateUrl: './mod-datos.page.html',
  styleUrls: ['./mod-datos.page.scss'],
})
export class ModDatosPage implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}

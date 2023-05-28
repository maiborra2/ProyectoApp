import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagar-factura',
  templateUrl: './pagar-factura.page.html',
  styleUrls: ['./pagar-factura.page.scss'],
})
export class PagarFacturaPage implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}

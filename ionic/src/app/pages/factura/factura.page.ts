import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "../../services/data.service";



@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }
  masDetallesUltimaFactura(){
    this.router.navigate(['/ultima-factura']);
  } 
  consumoAnualGrafica(){
    this.router.navigate(['/consumo-anual']);
  }
}

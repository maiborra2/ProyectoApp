import { Component, OnInit } from '@angular/core';
import {Factura} from "../../common/Factura";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  facturas: Factura[] = [];
  constructor(private dataservice: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const userId = '645a046240cc99c1c82a2db1';
    this.loadFacturas(userId);
  }

  private loadFacturas(userId: string) {
    this.dataservice.getFacturasPorUser(userId).subscribe(
      (data: Factura[]) => {
        this.facturas = data;
        console.log(this.facturas); // Solo para verificar si se obtienen las inicio correctamente
      },
      (error) => {
        console.error('Error al cargar las inicio:', error);
      }
    );
  }
}

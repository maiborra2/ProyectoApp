import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import {Preferences} from "@capacitor/preferences";
import {User} from "../../../common/User";
import {DataService} from "../../../services/data.service";
import {Factura} from "../../../common/Factura";



@Component({
  selector: 'app-consumo-anual',
  templateUrl: './consumo-anual.page.html',
  styleUrls: ['./consumo-anual.page.scss'],
})
export class ConsumoAnualPage implements OnInit {
  facturas: Factura[] = [];
  facturaspasado: Factura []= [];
  facturasanterior: Factura []= [];
  chartData: Factura[] = [];
  //esto es un cambio
  user: User | undefined;
 facturasActual: Factura[] = [];



  constructor(private dataservice: DataService) {

  }

  ngOnInit() {
    this.cargarDatos();

  }
 buscarFactura() {
    this.facturaspasado = this.facturas.filter((factura) => factura.anyo_factura == 2021)
    this.facturasanterior = this.facturas.filter((factura) => factura.anyo_factura == 2022)
   this.facturasActual =  this.facturas.filter((factura) => factura.anyo_factura == 2023)
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
        this.buscarFactura();
        this.generateChart1();
        this.generateChart2();
      },
      (error) => {
        console.error('Error al cargar el usuario:', error);
      }
    );
  }
  private generateChart1() {

    const canvas = document.getElementById('myChartLineCAnual1') as HTMLCanvasElement;
    const myChartColors = ['#98FB98', '#4682B4','#FA8072' ];
    const labels = ['Año anterior','Año pasado','Año actual'];
    const labelsmes = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

    const ctx = canvas.getContext('2d');

    if (ctx && this.facturas.length > 0) {



      const dataCosteDon = this.facturasActual.map(factura => factura.coste_mes);
      const dataCosteDonPa = this.facturaspasado.map(factura => factura.coste_mes);
      const dataCosteDonAn = this.facturasanterior.map(factura => factura.coste_mes);


      new Chart(ctx, {
        type: 'line',
  data: {
    labels: labelsmes,
    datasets: [
      {
        label: labels[0],
        data: [dataCosteDon[0],dataCosteDon[1],dataCosteDon[2],dataCosteDon[3],dataCosteDon[4],dataCosteDon[5],dataCosteDon[6],dataCosteDon[7],dataCosteDon[8],dataCosteDon[9],dataCosteDon[10],dataCosteDon[11]],
        borderColor: myChartColors[0],
        backgroundColor: myChartColors[0],
      },
      {
        label:   labels[1],
        data: [dataCosteDonPa[0],dataCosteDonPa[1],dataCosteDonPa[2],dataCosteDonPa[3],dataCosteDonPa[4],dataCosteDonPa[5],dataCosteDonPa[6],dataCosteDonPa[7],dataCosteDonPa[8],dataCosteDonPa[9],dataCosteDonPa[10],dataCosteDonPa[11]],
        borderColor: myChartColors[1],
        backgroundColor: myChartColors[1],
      },
      {
        label:  labels[2],
        data: [dataCosteDonAn[0],dataCosteDonAn[1],dataCosteDonAn[2],dataCosteDonAn[3],dataCosteDonAn[4],dataCosteDonAn[5],dataCosteDonAn[6],dataCosteDonAn[7],dataCosteDonAn[8],dataCosteDonAn[9],dataCosteDonAn[10],dataCosteDonAn[11]],
        borderColor: myChartColors[2],
        backgroundColor: myChartColors[2],
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',

      },
      title: {
        display: true,
        text: ''
            }
          }
        }
      });
    }
  }
  private generateChart2() {
    const canvas = document.getElementById('myChartLineCAnual2') as HTMLCanvasElement;
    const myChartColors = ['#e8e310', '#35e8c8','#860909' ];
    const labels = ['Año anterior','Año pasado','Año actual'];
    const labelsmes = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

    const ctx = canvas.getContext('2d');

    if (ctx && this.facturas.length > 0) {

      const dataCosteDon = this.facturasActual.map(factura => factura.coste_mes);
      const dataCosteDonPa = this.facturaspasado.map(factura => factura.coste_mes);
      const dataCosteDonAn = this.facturasanterior.map(factura => factura.coste_mes);

      const ultimaFactura = this.facturas[0]; // Obtener la última factura del array
      const dataConsumoDon = this.facturas.map(factura => factura.consumoKw_mes);

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labelsmes,
          datasets: [
            {
              label: labels[0],
              data: [dataCosteDon[0],dataCosteDon[1],dataCosteDon[2],dataCosteDon[3],dataCosteDon[4],dataCosteDon[5],dataCosteDon[6],dataCosteDon[7],dataCosteDon[8],dataCosteDon[9],dataCosteDon[10],dataCosteDon[11]],
              borderColor: myChartColors[0],
              backgroundColor: myChartColors[0],
            },
            {
              label:   labels[1],
              data: [dataCosteDonPa[0],dataCosteDonPa[1],dataCosteDonPa[2],dataCosteDonPa[3],dataCosteDonPa[4],dataCosteDonPa[5],dataCosteDonPa[6],dataCosteDonPa[7],dataCosteDonPa[8],dataCosteDonPa[9],dataCosteDonPa[10],dataCosteDonPa[11]],
              borderColor: myChartColors[1],
              backgroundColor: myChartColors[1],
            },
            {
              label:  labels[2],
              data: [dataCosteDonAn[0],dataCosteDonAn[1],dataCosteDonAn[2],dataCosteDonAn[3],dataCosteDonAn[4],dataCosteDonAn[5],dataCosteDonAn[6],dataCosteDonAn[7],dataCosteDonAn[8],dataCosteDonAn[9],dataCosteDonAn[10],dataCosteDonAn[11]],              borderColor: myChartColors[2],
              backgroundColor: myChartColors[2],
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',

            },
            title: {
              display: true,
              text: ''
            }
          }
        }
      });
    }
  }

}

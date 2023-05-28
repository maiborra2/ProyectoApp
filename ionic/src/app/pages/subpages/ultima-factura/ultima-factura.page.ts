import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/common/Factura';
import {DataService} from "../../../services/data.service";
import { User } from 'src/app/common/User';
import { Chart } from 'chart.js';

import {Preferences} from "@capacitor/preferences";


@Component({
  selector: 'app-ultima-factura',
  templateUrl: './ultima-factura.page.html',
  styleUrls: ['./ultima-factura.page.scss'],
})
export class UltimaFacturaPage implements OnInit {
  facturas: Factura[] = [];
  //esto es un cambio
  user: User | undefined;
  constructor(private dataservice: DataService) {
    // Utiliza la interfaz Factura en el constructor para inicializar la propiedad factura
  }



  //graficas
  ngOnInit() {
     // Llamar al método para generar la gráfica
    this.cargarDatos();


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

        this.genChartDonutUF();
        this.BarChartUF();
      },
      (error) => {
        console.error('Error al cargar el usuario:', error);
      }
    );
  }

  //grafica Consumo semanal
 /* private lineChartUF() {
    const DATA_COUNT = 4;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 24 };
    const canvas = document.getElementById('myChartLineUF') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const myChartColors = ['#98FB98', '#4682B4'];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Hora punta',
          data: [10,10,10,10],
          borderColor: myChartColors[0],
          backgroundColor: this.transparentizeColor(myChartColors[0], 0.5),
        },
        {
          label: 'Hora valle',
          data: [20,20,20,20],
          borderColor: myChartColors[1],
          backgroundColor: this.transparentizeColor(myChartColors[1], 0.5),
        }
      ]
    };


    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: data,
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
  }*/


  private genChartDonutUF123() {
    const canvas = document.getElementById('myChartDonUF') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChartColors = ['#98FB98', '#FFD700'	,'#FF8C00' ,'#4682B4' ];


    const data = {
      labels: ['Impuesto de electricidad','Energia consumida','IVA (21%)','Tarifa de la potencia contratada' ],
      datasets: [
        {
          label: 'Euros',
          data: [15, 20,25,12],
          backgroundColor: myChartColors,
        }
      ]
    };

    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: data,
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


  private genChartDonutUF() {
    const canvas = document.getElementById('myChartDonUF') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChartColors = ['#98FB98', '#4682B4','#f8d10e', '#fc642d' ];
    //const labelsDon = this.chartData.map(factura => `${factura.mes_factura} ${factura.anyo_factura}`);


    if (ctx && this.facturas.length > 0) {

      const ultimaFactura = this.facturas[0]; // Obtener la última factura del array
      const semanas = ultimaFactura.semanas.map(semana => `Semana ${semana.numero_semana}`);
      const costoKwSemana = ultimaFactura.semanas.map(semana => semana.consumoKw_semana);
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Potencia','Consumo', 'Impuesto de electricidad' ],
          datasets: [
            {
              label: 'Euros',
              data: [ultimaFactura.coste_mes,costoKwSemana[1],costoKwSemana[2]],
              backgroundColor: myChartColors,
              borderColor: myChartColors,
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
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





  private BarChartUF() {
    const canvas = document.getElementById('myChartLineUF') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx && this.facturas.length > 0) {
      const ultimaFactura = this.facturas[0]; // Obtener la última factura del array

      const semanas = ultimaFactura.semanas.map(semana => `Semana ${semana.numero_semana}`);
      const costoKwSemana = ultimaFactura.semanas.map(semana => semana.consumoKw_semana);
      const costoSemana = ultimaFactura.semanas.map(semana => semana.coste_semana);

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: semanas,
          datasets: [
            {
              label: 'Gasto de kW por semana',
              data: costoKwSemana,
              backgroundColor: 'rgba(0, 123, 255, 0.6)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1,
            },
            {
              label: 'Gasto mas bajo',
              data: costoSemana,
              backgroundColor: 'rgba(255, 0, 0, 0.6)',
              borderColor: 'rgba(255, 0, 0, 1)',
              borderWidth: 1,
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }




}





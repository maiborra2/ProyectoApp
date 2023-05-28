import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Factura } from 'src/app/common/Factura';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/common/User';
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-consumo-actual',
  templateUrl: './consumo-actual.page.html',
  styleUrls: ['./consumo-actual.page.scss'],
})
export class ConsumoActualPage implements OnInit {
  facturas: Factura[] = [];
  chartData: Factura[] = [];
  user: User | undefined;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.cargarDatos();
 //this.loadUserAndFacturas;
  }
  private loadUserAndFacturas(userId: string) {
    this.dataservice.getUser(userId).subscribe(
      (user: User) => {
        console.log('Usuario:', user); // Verificar si se obtiene el usuario correctamente

        // Obtener las facturas del usuario
        this.facturas = user.facturas;
        console.log('Facturas:', this.facturas); // Verificar si se obtienen las facturas correctamente
        //this.updateCharts();
      },
      (error) => {
        console.error('Error al cargar el usuario:', error);
      }
    );
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
        this.generateChart();
        this.genChartDonut();
      },
      (error) => {
        console.error('Error al cargar el usuario:', error);
      }
    );
  }



  private generateChart() {
    const canvas = document.getElementById('myChartLineCA') as HTMLCanvasElement;
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
  private genChartDonut1() {
    const canvas = document.getElementById('myChartPieCA') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChartColors = ['#98FB98', '#4682B4' ];
    //const labelsDon = this.chartData.map(factura => `${factura.mes_factura} ${factura.anyo_factura}`);


    if (ctx && this.facturas.length > 0) {

      const ultimaFactura = this.facturas[0]; // Obtener la última factura del array
      const semanas = ultimaFactura.semanas.map(semana => `Semana ${semana.numero_semana}`);
      const costoKwSemana = ultimaFactura.semanas.map(semana => semana.consumoKw_semana);
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Potencia','Consumo' ],
          datasets: [
            {
              label: 'Euros',
              data: [ultimaFactura.coste_mes,semanas[1]],
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
  private genChartDonut() {
    const canvas = document.getElementById('myChartPieCA') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChartColors = ['#f8d10e', '#fc642d' ];
    //const labelsDon = this.chartData.map(factura => `${factura.mes_factura} ${factura.anyo_factura}`);


    if (ctx && this.facturas.length > 0) {

      const ultimaFactura = this.facturas[0]; // Obtener la última factura del array
      const semanas = ultimaFactura.semanas.map(semana => `Semana ${semana.numero_semana}`);
      const costoKwSemana = ultimaFactura.semanas.map(semana => semana.consumoKw_semana);
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Consumo actual','Consumo mas bajo'],
          datasets: [
            {
              label: 'Euros',
              data: [ultimaFactura.coste_mes,costoKwSemana[0]],
              borderColor: myChartColors,
              backgroundColor: myChartColors,
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
/*updateCharts() {

  const canvas = document.getElementById('myChartLineCA') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  const semanas = this.facturas.map(factura => factura.semanas.map(semana => semana.numero_semana)).reduce((acc, val) => acc.concat(val), []);
  const consumoKwSemanas = this.facturas.map(factura => factura.semanas.map(semana => semana.consumoKw_semana)).reduce((acc, val) => acc.concat(val), []);
  const labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];

  const data = {
    labels: semanas,
    datasets: [
      {
        label: 'Consumo actual',
        data: consumoKwSemanas,
        borderColor: 'rgba(255, 0, 0, 1)',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
      },
      {
        label: 'Consumo mas bajo',
        data: [10, 20, 15, 30],
        borderColor: 'rgba(0, 123, 255, 1)',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      }
    ]
  };

  if (ctx) {
    new Chart(ctx, {
      type: 'line',
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
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: ''
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Kw/h'
            }
          }
        }
      }
    });
  }
const canvas2 = document.getElementById('myChartPieCA') as HTMLCanvasElement;
    const ctx2 = canvas2.getContext('2d');

  if (ctx2) {

    const semanas = this.facturas.map(factura => factura.semanas.map(semana => semana.numero_semana)).reduce((acc, val) => acc.concat(val), []);
    const consumoKwSemanas = this.facturas.map(factura => factura.semanas.map(semana => semana.consumoKw_semana)).reduce((acc, val) => acc.concat(val), []);


    const labels = ['Consumo electrico','Consumo bajo placas solares'];
    const data = {
      labels: semanas.map(String),
      datasets: [{
        data: consumoKwSemanas,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
      }]
    };

    new Chart(ctx2, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
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
}

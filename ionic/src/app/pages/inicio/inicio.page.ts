import { Component, OnInit } from '@angular/core';
import {Factura} from "../../common/Factura";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import { User } from 'src/app/common/User';
import Chart from 'chart.js/auto';
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  facturas: Factura[] = [];
  factura: Factura[] = [];

  //esto es un cambio
   user: User | undefined;
  constructor(protected dataservice: DataService, private router: Router , private activatedRoute: ActivatedRoute) {


   }
  ngOnInit() {
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
        this.factura = this.facturas.slice(-1);

        console.log('Usuario:', this.user);
        console.log('Facturas:', this.factura);
        this.generateChart();
      },
      (error) => {
        console.error('Error al cargar el usuario:', error);
      }
    );
  }
  getNombreCompleto(): string {
    if (this.user) {
      return `${this.user.nombre} ${this.user.apellido1} ${this.user.apellido2}`;
    }
    return '';
  }

  //grafica
  //grafica Ultima Factura Inicio


  private generateChart() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx && this.facturas.length > 0) {
      const ultimaFactura = this.facturas[0]; // Obtener la última factura del array

      const semanas = ultimaFactura.semanas.map(semana => `Semana ${semana.numero_semana}`);
      const costoKwSemana = ultimaFactura.semanas.map(semana => semana.consumoKw_semana);
      const costoSemana = ultimaFactura.semanas.map(semana => semana.coste_semana);

      new Chart(ctx, {
        type: 'bar', //pie
        data: {
          labels: semanas,
          datasets: [
            {
              label: 'Costo de kW por semana',
              data: costoKwSemana,
              backgroundColor: 'rgba(0, 123, 255, 0.6)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1,
            },
            {
              label: 'Costo total por semana',
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







  // Grafica gasto economico actual
private genChartDonut() {
    const canvas = document.getElementById('myChartDon') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChartColors = ['#98FB98', '#4682B4' ];


    const data = {
      labels: ['Potencia','Consumo' ],
      datasets: [
        {
          label: 'Euros',
          data: [40, 60],
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

  //navegacion para mas detalles
  masDetallesConsumido(){
    this.router.navigate(['/consumo-actual']);
  }
  masDetallesUltimaFactura(){
    this.router.navigate(['/ultima-factura']);
  }

}

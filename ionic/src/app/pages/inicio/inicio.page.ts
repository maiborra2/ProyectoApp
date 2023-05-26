import { Component, OnInit } from '@angular/core';
import {Factura} from "../../common/Factura";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import { User } from 'src/app/common/User';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  facturas: Factura[] = [];

  //esto es un cambio
  constructor(private dataservice: DataService, private router: Router , private activatedRoute: ActivatedRoute) {


   }
  ngOnInit() {
    const userId = '645a046240cc99c1c82a2db1';
    this.loadUserAndFacturas(userId);
    this.generateChart();
    this.genChartDonut();

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
  private loadUserAndFacturas(userId: string) {
    this.dataservice.getUser(userId).subscribe(
      (user: User) => {
        console.log('Usuario:', user); // Verificar si se obtiene el usuario correctamente

        // Obtener las facturas del usuario
        this.facturas = user.facturas;
        console.log('Facturas:', this.facturas); // Verificar si se obtienen las facturas correctamente
      },
      (error) => {
        console.error('Error al cargar el usuario:', error);
      }
    );
  }

  //grafica
  //grafica Ultima Factura Inicio
  private generateChart() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
          datasets: [
            {
              label: 'Dinero',
              data: [100, 200, 150, 120],
              backgroundColor: 'rgba(0, 123, 255, 0.6)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1,
            },
            {
              label: 'Gasto de kW',
              data: [50, 80, 60, 70],
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

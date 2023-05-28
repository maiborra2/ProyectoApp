import { Component, OnInit } from '@angular/core';
import {Factura} from "../../common/Factura";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import { User } from 'src/app/common/User';
import Chart from 'chart.js/auto';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit{

  facturas: Factura[] = [];
  chartData: Factura[] = [];
  //esto es un cambio
   user: User | undefined;
  constructor(private dataservice: DataService, private router: Router , private activatedRoute: ActivatedRoute) {


   }
  ngOnInit() {
    const userId = '645a046240cc99c1c82a2db1';
    this.loadUserAndFacturas(userId);
//<<<<<<< HEAD
    this.loadData(userId);
    this.updateCharts();
  }

/*   ngAfterViewInit() {
    this.updateCharts();
  } */


  private loadFacturas(userId: string) {
    this.dataservice.getFacturasPorUser(userId).subscribe(
      (data: Factura[]) => {
        this.facturas = data;
        console.log(this.facturas);
      },
      (error) => {
        console.error('Error al cargar las inicio:', error);
      }
    );
  }
  private loadUserAndFacturas(userId: string) {
    this.dataservice.getUser(userId).subscribe(
      (user: User) => {
        this.user = user;
        console.log('Usuario:', user); // Verificar si se obtiene el usuario correctamente

        // Obtener las facturas del usuario
        this.facturas = user.facturas;
        console.log('Facturas:', this.facturas); // Verificar si se obtienen las facturas correctamente
        this.updateCharts();
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

//<<<<<<< HEAD
  //navegacion para mas detalles
  masDetallesConsumido(){
    this.router.navigate(['/consumo-actual']);
  }
  masDetallesUltimaFactura(){
    this.router.navigate(['/ultima-factura']);
  }

  loadData(userId: string) {
    this.dataservice.getChartData(userId).subscribe(
      (data: Factura[]) => {
        this.chartData = data;
        // Llama a la función para actualizar las gráficas con los datos recibidos
        this.updateCharts();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateCharts() {
    // Actualiza las gráficas utilizando los datos obtenidos de la API (this.chartData)
    //GRAFICA DONUT
    const canvas = document.getElementById('myChartDon') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const myChartColors = ['#98FB98', '#4682B4' ];
    const consumoMes = this.chartData.length > 0 ? this.chartData[0].consumoKw_mes : 0;
    const costeMes = this.chartData.length > 0 ? this.chartData[0].coste_mes : 0;
    const dataDon = {
      labels: ['Potencia','Consumo' ],
      datasets: [
        {
          label: 'Euros',
          data: [consumoMes, costeMes],
          backgroundColor: myChartColors,
        }
      ]
    };

    if (ctx) {
      new Chart(ctx, {
//<<<<<<< HEAD
        type: 'doughnut',
        data: dataDon,
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

    // GRAFICA BARRA



    if (ctx) {
       // Obtén los datos de número de semana, consumoKw_semana y coste_semana de las facturas en this.chartData
    const canvas2 = document.getElementById('myChartBar') as HTMLCanvasElement;
    const ctx2 = canvas2.getContext('2d');
    if (ctx2) {
    const semanas = this.facturas.map(factura => factura.semanas.map(semana => semana.numero_semana)).reduce((acc, val) => acc.concat(val), []);
    const consumoKwSemanas = this.facturas.map(factura => factura.semanas.map(semana => semana.consumoKw_semana)).reduce((acc, val) => acc.concat(val), []);
    const costeSemanas = this.facturas.map(factura => factura.semanas.map(semana => semana.coste_semana)).reduce((acc, val) => acc.concat(val), []);

      new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: semanas,
          datasets: [
            {
              label: 'Dinero',
              data: costeSemanas.reduce,
              backgroundColor: myChartColors,
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1,
            },
            {
              label: 'Gasto de kW',
//<<<<<<< HEAD
              data: consumoKwSemanas.reduce,
              backgroundColor: myChartColors,
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
//<<<<<<< HEAD
  }

    }


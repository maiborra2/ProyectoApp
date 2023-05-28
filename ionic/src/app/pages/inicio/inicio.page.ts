import { Component, OnInit } from '@angular/core';
import {Factura} from "../../common/Factura";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import { User } from 'src/app/common/User';
import { Chart } from 'chart.js';
import { AfterViewInit } from '@angular/core';
import {Preferences} from "@capacitor/preferences";

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

   public chartDon: any;


   public chartBar: any;



  constructor(private dataservice: DataService, private router: Router , private activatedRoute: ActivatedRoute) {


   }


 ngOnInit() {
    const userId = '645a046240cc99c1c82a2db1';
    this.loadUserAndFacturas(userId);
    this.cargarDatos();

//<<<<<<< HEAD
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

/*
  ngAfterViewInit() {
    const userId = '645a046240cc99c1c82a2db1';
    this.loadUserAndFacturas(userId);
    this.loadData(userId);
    this.updateCharts();
  }*/




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
        this.loadData(userId);

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
        //this.updateCharts();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //window.onload=function(){}
/*  updateCharts() {
    // Actualiza las gráficas utilizando los datos obtenidos de la API (this.chartData)
    //GRAFICA DONUT
    let canvas = document.getElementById('myChartDon')
    let canvas2 = document.getElementById('myChartBar')
    const ctx = document.getElementById('myChartDon').getContext('2d')
    const ctx2 = canvas2.getContext('2d');
    console.log(document.getElementById('myChartDon'));

    const myChartColors = ['#98FB98', '#4682B4' ];
    const consumoMes = this.chartData.length > 0 ? this.chartData[0].consumoKw_mes : 0;
    const costeMes = this.chartData.length > 0 ? this.chartData[0].coste_mes : 0;

     const labelsDon = this.chartData.map(factura => `${factura.mes_factura} ${factura.anyo_factura}`);
    const dataConsumoDon = this.chartData.map(factura => factura.consumoKw_mes);
    const dataCosteDon = this.chartData.map(factura => factura.coste_mes);

    console.log(this.chartData)


  }*/

  private genChartDonut() {
    const canvas = document.getElementById('myChartDon') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChartColors = ['#98FB98', '#4682B4' ];
    //const labelsDon = this.chartData.map(factura => `${factura.mes_factura} ${factura.anyo_factura}`);


    if (ctx && this.facturas.length > 0) {

      const ultimaFactura = this.facturas[0]; // Obtener la última factura del array

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Gasto','Consumo' ],
          datasets: [
            {
              label: '',
              data: [ultimaFactura.coste_mes,ultimaFactura.consumoKw_mes],
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





  private generateChart() {
    const canvas = document.getElementById('myChartBar') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx && this.facturas.length > 0) {
      const ultimaFactura = this.facturas[0]; // Obtener la última factura del array

      const semanas = ultimaFactura.semanas.map(semana => `Semana ${semana.numero_semana}`);
      const costoKwSemana = ultimaFactura.semanas.map(semana => semana.consumoKw_semana);
      const costoSemana = ultimaFactura.semanas.map(semana => semana.coste_semana);

      new Chart(ctx, {
        type: 'bar',
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

  /*updateCharts() {
    // Actualiza las gráficas utilizando los datos obtenidos de la API (this.chartData)
    //GRAFICA DONUT
    let canvas = document.getElementById('myChartDon')
    let canvas2 = document.getElementById('myChartBar')
    const ctx = document.getElementById('myChartDon').getContext('2d')
    //const ctx2 = canvas2.getContext('2d');
    console.log(document.getElementById('myChartDon'));

    const myChartColors = ['#98FB98', '#4682B4' ];
    const consumoMes = this.chartData.length > 0 ? this.chartData[0].consumoKw_mes : 0;
    const costeMes = this.chartData.length > 0 ? this.chartData[0].coste_mes : 0;

    const labelsDon = this.chartData.map(factura => `${factura.mes_factura} ${factura.anyo_factura}`);
    const dataConsumoDon = this.chartData.map(factura => factura.consumoKw_mes);
    const dataCosteDon = this.chartData.map(factura => factura.coste_mes);

    console.log(this.chartData)

    const dataDon = {
      labels: ['Potencia','Consumo' ],
      datasets: [
        {
          label: 'Euros',
          data: [dataConsumoDon, dataCosteDon],
          backgroundColor: myChartColors,
        }
      ]
    };

    if (this.chartDon) {
      this.chartDon.destroy();

      this.chartDon = new Chart(ctx, {
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
      this.chartDon.update();
    }

    // GRAFICA BARRA




    // Obtén los datos de número de semana, consumoKw_semana y coste_semana de las facturas en this.chartData


    if (this.chartBar) {
      this.chartBar.destroy();

      const semanas = this.facturas.map(factura => factura.semanas.map(semana => semana.numero_semana)).reduce((acc, val) => acc.concat(val), []);
      const consumoKwSemanas = this.facturas.map(factura => factura.semanas.map(semana => semana.consumoKw_semana)).reduce((acc, val) => acc.concat(val), []);
      const costeSemanas = this.facturas.map(factura => factura.semanas.map(semana => semana.coste_semana)).reduce((acc, val) => acc.concat(val), []);

      //this.chartBar =
      new Chart("ctx2", {
        type: 'bar',
        data: {
          labels: semanas,
          datasets: [
            {
              label: 'Dinero',
              data: costeSemanas,
              backgroundColor: myChartColors,
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1,
            },
            {
              label: 'Gasto de kW',
//<<<<<<< HEAD
              data: consumoKwSemanas,
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
      this.chartBar.update();
    }
  }*/
//<<<<<<< HEAD
  }




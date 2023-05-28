import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Factura } from 'src/app/common/Factura';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/common/User';

@Component({
  selector: 'app-consumo-actual',
  templateUrl: './consumo-actual.page.html',
  styleUrls: ['./consumo-actual.page.scss'],
})
export class ConsumoActualPage implements OnInit {
  facturas: Factura[] = [];
  chartData: Factura[] = [];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.loadData();
 this.updateCharts();
 this.loadUserAndFacturas;
  }
  private loadUserAndFacturas(userId: string) {
    this.dataservice.getUser(userId).subscribe(
      (user: User) => {
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

  loadData() {
    const userId = '645a046240cc99c1c82a2db1'; // Reemplaza con el valor adecuado de userId
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
  
}
}

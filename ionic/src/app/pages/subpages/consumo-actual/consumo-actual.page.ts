import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-consumo-actual',
  templateUrl: './consumo-actual.page.html',
  styleUrls: ['./consumo-actual.page.scss'],
})
export class ConsumoActualPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.lineChart(); // Llamar al método para generar la gráfica
    this.PieChart();
 
  }

  //graficas
  private lineChart() {
  
    const canvas = document.getElementById('myChartLineCA') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Consumo actual',
          data: [ 50, 30, 70, 40 ],
          borderColor: 'rgba(255, 0, 0, 1)',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
        },
        {
          label: 'Consumo mas bajo',
          data: [10, 20, 15, 30,],
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
  }

  private PieChart() {

    const canvas = document.getElementById('myChartPieCA') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const labels = ['Consumo electrico','Consumo bajo placas solares'];
    const data = {
      labels: labels,
      datasets: [{
        
        data: [ 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
      }]
    };
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: data,
      });
    }

}
}

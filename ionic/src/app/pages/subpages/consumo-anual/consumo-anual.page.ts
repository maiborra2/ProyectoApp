import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-consumo-anual',
  templateUrl: './consumo-anual.page.html',
  styleUrls: ['./consumo-anual.page.scss'],
})
export class ConsumoAnualPage implements OnInit {


  constructor() { 
    
  }

  ngOnInit() {
    this.generateChart1();
    this.generateChart2();
  }

  private generateChart1() {

    const canvas = document.getElementById('myChartLineCAnual1') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChartColors = ['#98FB98', '#4682B4','#FA8072' ];
    const labels = ['Año anterior','Año pasado','Año actual'];
    const labelsmes = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const data = {
      labels: labelsmes,
      datasets: [
        {
          label: labels[0],
          data: [30, 10, 15, 30, 55, 50, 25, 43, 40, 25, 30,34],
          borderColor: myChartColors[0],
          backgroundColor: myChartColors[0],
        },
        {
          label:   labels[1],
          data: [10, 60, 90, 30 ,75, 50, 45, 80, 50, 65, 30,34],
          borderColor: myChartColors[1],
          backgroundColor: myChartColors[1],
        },
        {
          label:  labels[2],
          data: [15, 50, 45, 40, 45, 50, 45, 40, 50, 45, 40,23],
          borderColor: myChartColors[2],
          backgroundColor: myChartColors[2],
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
          }
        }
      });
    }
  }
  private generateChart2() {
    const canvas = document.getElementById('myChartLineCAnual2') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChartColors = ['#98FB98', '#4682B4','#FA8072' ];
    const labels = ['2021', '2022', '2023'];
    const labels1 = ['2021', '2022', '2023'];
    const data = {
      labels: labels,
      datasets: [
        {
          label: labels[0],
          data: [ 50,0,0 ],
          borderColor: myChartColors[0],
          backgroundColor: myChartColors[0],
        },
        {
          label:labels[1],
          data: [  0,65,0],
          borderColor: myChartColors[1],
          backgroundColor: myChartColors[1],
        },
        {
          label:  labels[2],
          data: [ 0,0,40],
          borderColor: myChartColors[2],
          backgroundColor: myChartColors[2],
        }
      ]
    };

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          indexAxis: 'y',
          // Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
          elements: {
            bar: {
              borderWidth: 2,
            }
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Euros'
            }
          }
        }
      });
    }

  }

}

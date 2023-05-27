import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Factura } from 'src/app/common/Factura';



@Component({
  selector: 'app-ultima-factura',
  templateUrl: './ultima-factura.page.html',
  styleUrls: ['./ultima-factura.page.scss'],
})
export class UltimaFacturaPage implements OnInit {
  factura: Factura;
  constructor() {
    // Utiliza la interfaz Factura en el constructor para inicializar la propiedad factura
    this.factura = {
      user: 'Aurelio Botijo',
      mes_factura: 'Mayo',
      anyo_factura: 2023,
      consumoKw_mes: 100,
      coste_mes: 50,
      fecha_inicio_mes: 1620144000,
      fecha_fin_mes: 1622822399,
      pagada:true,
      semanas: [
        {
          numero_semana: 1,
          consumoKw_semana: 30,
          coste_semana: 15,
        },
        // Otras semanas...
      ],
    };
  }



  //graficas
  ngOnInit() {
    this.lineChartUF(); // Llamar al método para generar la gráfica
    this.genChartDonutUF();


  }

  //grafica Consumo semanal
  private lineChartUF() {
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
          data: this.generateRandomNumbers(NUMBER_CFG),
          borderColor: myChartColors[0],
          backgroundColor: this.transparentizeColor(myChartColors[0], 0.5),
        },
        {
          label: 'Hora valle',
          data: this.generateRandomNumbers(NUMBER_CFG),
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

//generador de randoms para la grafica
  private generateRandomNumbers(config: { count: number, min: number, max: number }): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < config.count; i++) {
      const number = Math.floor(Math.random() * (config.max - config.min + 1)) + config.min;
      numbers.push(number);
    }
    return numbers;
  }
//opacidad
  private transparentizeColor(color: string, opacity: number): string {
    const rgbColor = this.hexToRgb(color);
    return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacity})`;
  }

  // Convertir un color en formato hexadecimal a RGB
  private hexToRgb(hex: string): { r: number, g: number, b: number } {
    const normalizedHex = hex.replace('#', '');
    const r = parseInt(normalizedHex.substring(0, 2), 16);
    const g = parseInt(normalizedHex.substring(2, 4), 16);
    const b = parseInt(normalizedHex.substring(4, 6), 16);
    return { r, g, b };
  }


  private genChartDonutUF() {
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





}





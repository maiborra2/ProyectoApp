import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltimaFacturaPageRoutingModule } from './ultima-factura-routing.module';

import { UltimaFacturaPage } from './ultima-factura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UltimaFacturaPageRoutingModule
  ],
  declarations: [UltimaFacturaPage]
})
export class UltimaFacturaPageModule {}

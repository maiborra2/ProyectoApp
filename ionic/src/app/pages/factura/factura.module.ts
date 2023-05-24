import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturaPageRoutingModule } from './factura-routing.module';

import { FacturaPage } from './factura.page';
import {ContactoPageModule} from "../contacto/contacto.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FacturaPageRoutingModule,
        ContactoPageModule
    ],
  declarations: [FacturaPage]
})
export class FacturaPageModule {}

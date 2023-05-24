import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarDatosPageRoutingModule } from './consultar-datos-routing.module';

import { ConsultarDatosPage } from './consultar-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarDatosPageRoutingModule
  ],
  declarations: [ConsultarDatosPage]
})
export class ConsultarDatosPageModule {}

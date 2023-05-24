import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivarVerificacionPageRoutingModule } from './activar-verificacion-routing.module';

import { ActivarVerificacionPage } from './activar-verificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivarVerificacionPageRoutingModule
  ],
  declarations: [ActivarVerificacionPage]
})
export class ActivarVerificacionPageModule {}

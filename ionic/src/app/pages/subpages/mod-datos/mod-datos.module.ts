import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModDatosPageRoutingModule } from './mod-datos-routing.module';

import { ModDatosPage } from './mod-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModDatosPageRoutingModule
  ],
  declarations: [ModDatosPage]
})
export class ModDatosPageModule {}

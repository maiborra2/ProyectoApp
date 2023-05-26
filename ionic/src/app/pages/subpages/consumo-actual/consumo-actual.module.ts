import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumoActualPageRoutingModule } from './consumo-actual-routing.module';

import { ConsumoActualPage } from './consumo-actual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumoActualPageRoutingModule
  ],
  declarations: [ConsumoActualPage]
})
export class ConsumoActualPageModule {}

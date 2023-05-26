import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumoAnualPageRoutingModule } from './consumo-anual-routing.module';

import { ConsumoAnualPage } from './consumo-anual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumoAnualPageRoutingModule
  ],
  declarations: [ConsumoAnualPage]
})
export class ConsumoAnualPageModule {}

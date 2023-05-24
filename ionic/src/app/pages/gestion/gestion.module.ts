import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionPageRoutingModule } from './gestion-routing.module';

import { GestionPage } from './gestion.page';
import {ContactoPageModule} from "../contacto/contacto.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GestionPageRoutingModule,
        ContactoPageModule
    ],
  declarations: [GestionPage]
})
export class GestionPageModule {}

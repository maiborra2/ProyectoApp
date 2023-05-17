import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import {ContactoPageModule} from "../contacto/contacto.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InicioPageRoutingModule,
        ContactoPageModule
    ],
  declarations: [InicioPage]
})
export class InicioPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import {ContactoPageModule} from "../contacto/contacto.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PerfilPageRoutingModule,
        ContactoPageModule,
    ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}

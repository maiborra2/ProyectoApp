import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarDatosUsuarioPageRoutingModule } from './cambiar-datos-usuario-routing.module';

import { CambiarDatosUsuarioPage } from './cambiar-datos-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarDatosUsuarioPageRoutingModule
  ],
  declarations: [CambiarDatosUsuarioPage]
})
export class CambiarDatosUsuarioPageModule {}

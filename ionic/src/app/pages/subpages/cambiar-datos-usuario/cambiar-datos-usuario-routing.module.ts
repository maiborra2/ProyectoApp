import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarDatosUsuarioPage } from './cambiar-datos-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarDatosUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarDatosUsuarioPageRoutingModule {}

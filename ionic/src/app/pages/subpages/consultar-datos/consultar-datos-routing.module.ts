import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarDatosPage } from './consultar-datos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarDatosPageRoutingModule {}

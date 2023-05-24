import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivarVerificacionPage } from './activar-verificacion.page';

const routes: Routes = [
  {
    path: '',
    component: ActivarVerificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivarVerificacionPageRoutingModule {}

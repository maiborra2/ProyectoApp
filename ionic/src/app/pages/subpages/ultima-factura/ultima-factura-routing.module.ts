import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltimaFacturaPage } from './ultima-factura.page';

const routes: Routes = [
  {
    path: '',
    component: UltimaFacturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltimaFacturaPageRoutingModule {}

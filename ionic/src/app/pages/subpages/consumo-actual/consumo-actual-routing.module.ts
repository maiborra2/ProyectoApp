import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumoActualPage } from './consumo-actual.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumoActualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumoActualPageRoutingModule {}

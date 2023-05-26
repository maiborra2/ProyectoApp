import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumoAnualPage } from './consumo-anual.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumoAnualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumoAnualPageRoutingModule {}

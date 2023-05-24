import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModDatosPage } from './mod-datos.page';

const routes: Routes = [
  {
    path: '',
    component: ModDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModDatosPageRoutingModule {}

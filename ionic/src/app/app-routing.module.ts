import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TabsComponent} from "./components/tabs/tabs.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: TabsComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inicio'
      },
      {
        path: 'inicio',
        loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'factura',
        loadChildren: () => import('./pages/factura/factura.module').then( m => m.FacturaPageModule)
      },
      {
        path: 'gestion',
        loadChildren: () => import('./pages/gestion/gestion.module').then( m => m.GestionPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

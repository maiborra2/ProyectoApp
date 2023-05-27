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
        loadChildren: () => import('./pages/gestion/gestion.module').then( m => m.GestionPageModule),
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
  },
  {
    path: 'cambiar-plan',
    loadChildren: () => import('./pages/subpages/cambiar-plan/cambiar-plan.module').then( m => m.CambiarPlanPageModule)
  },
  {
    path: 'mod-datos',
    loadChildren: () => import('./pages/subpages/mod-datos/mod-datos.module').then( m => m.ModDatosPageModule)
  },
  {
    path: 'pagar-factura',
    loadChildren: () => import('./pages/subpages/pagar-factura/pagar-factura.module').then( m => m.PagarFacturaPageModule)
  },
  {
    path: 'incidencias',
    loadChildren: () => import('./pages/subpages/incidencias/incidencias.module').then( m => m.IncidenciasPageModule)
  },
  {
    path: 'consultar-datos',
    loadChildren: () => import('./pages/subpages/consultar-datos/consultar-datos.module').then( m => m.ConsultarDatosPageModule)
  },
  {
    path: 'cambiar-datos-usuario',
    loadChildren: () => import('./pages/subpages/cambiar-datos-usuario/cambiar-datos-usuario.module').then( m => m.CambiarDatosUsuarioPageModule)
  },
  {
    path: 'activar-verificacion',
    loadChildren: () => import('./pages/subpages/activar-verificacion/activar-verificacion.module').then( m => m.ActivarVerificacionPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/subpages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },  {
    path: 'consumo-actual',
    loadChildren: () => import('./pages/subpages/consumo-actual/consumo-actual.module').then( m => m.ConsumoActualPageModule)
  },
  {
    path: 'ultima-factura',
    loadChildren: () => import('./pages/subpages/ultima-factura/ultima-factura.module').then( m => m.UltimaFacturaPageModule)
  },
  {
    path: 'consumo-anual',
    loadChildren: () => import('./pages/subpages/consumo-anual/consumo-anual.module').then( m => m.ConsumoAnualPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/subpages/register/register.module').then( m => m.RegisterPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

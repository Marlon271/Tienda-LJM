// Importa NgModule para definir un módulo, y RouterModule y Routes para la configuración de rutas
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Importa los componentes que serán utilizados en las rutas
import { MenuComponent } from './menu/menu.component';
import { CreateComponent } from './crudProductos/create.component';
import { UpdateComponent } from './crudProductos/update.component';
import { AllComponent } from './crudProductos/all.component';
import { FindByIdComponent } from './crudProductos/find-by-id.component';
import { CreatePedidoComponent } from './crudPedidos/create-pedido.component';
import { UpdatePedidoComponent } from './crudPedidos/update-pedido.component';
import { AllPedidoComponent } from './crudPedidos/all-pedido.component';
import { FindByIdPedidoComponent } from './crudPedidos/find-by-id-pedido.component';

// Define las rutas de la aplicación, asociando cada ruta con su respectivo componente
const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'all', component: AllComponent },
  { path: 'findId/:id', component: FindByIdComponent },
  { path: 'createPedido', component: CreatePedidoComponent },
  { path: 'updatePedido/:id', component: UpdatePedidoComponent },
  { path: 'allPedido', component: AllPedidoComponent },
  { path: 'findIdPedido/:id', component: FindByIdPedidoComponent },
  { path: 'menu', component: MenuComponent }, // Ruta para el menú principal

  // Agrega la ruta para la página de login
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) 
  },

  // Ruta por defecto si no se encuentra ninguna otra
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Redirección para rutas no encontradas
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

// Decorador NgModule que define el módulo de enrutamiento de la aplicación
@NgModule({
  imports: [
    // Configura RouterModule con las rutas definidas y una estrategia de preloading
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { }

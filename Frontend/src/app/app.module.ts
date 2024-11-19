// Importa el decorador NgModule que es necesario para definir un módulo en Angular
import { NgModule } from '@angular/core';
// BrowserModule es necesario para cualquier aplicación que se ejecute en el navegador
import { BrowserModule } from '@angular/platform-browser';
// RouteReuseStrategy y RouterModule son necesarios para la configuración de rutas
import { RouteReuseStrategy } from '@angular/router';
// IonicModule es el módulo principal de Ionic que permite el uso de componentes de Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// AppComponent es el componente raíz de la aplicación
import { AppComponent } from './app.component';
// AppRoutingModule contiene la configuración de las rutas de la aplicación
import { AppRoutingModule } from './app-routing.module';
// HttpClientModule es necesario para realizar peticiones HTTP
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// FormsModule es necesario para trabajar con formularios y la directiva ngModel
import { FormsModule } from '@angular/forms';
// SweetAlert2Module es una librería para mostrar alertas y diálogos modales
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// BrowserAnimationsModule es necesario para las animaciones en la aplicación
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ToastrModule es una librería para mostrar notificaciones en pantalla
import { ToastrModule } from 'ngx-toastr';
// Importa los componentes creados para productos y pedidos
import { MenuComponent } from './menu/menu.component';
import { CreateComponent } from './crudProductos/create.component';
import { UpdateComponent } from './crudProductos/update.component';
import { AllComponent } from './crudProductos/all.component';
import { FindByIdComponent } from './crudProductos/find-by-id.component';
import { AllPedidoComponent } from './crudPedidos/all-pedido.component';
import { UpdatePedidoComponent } from './crudPedidos/update-pedido.component';
import { FindByIdPedidoComponent } from './crudPedidos/find-by-id-pedido.component';
import { CreatePedidoComponent } from './crudPedidos/create-pedido.component';

// Decorador NgModule que define el módulo principal de la aplicación
@NgModule({ declarations: [
        // Componentes que pertenecen a este módulo
        AppComponent,
        MenuComponent,
        CreateComponent,
        UpdateComponent,
        AllComponent,
        FindByIdComponent,
        AllPedidoComponent,
        UpdatePedidoComponent,
        FindByIdPedidoComponent,
        CreatePedidoComponent
    ],
    bootstrap: [
        // Componente raíz que será instanciado al iniciar la aplicación
        AppComponent
    ], imports: [
        // Módulos que son importados y utilizados en este módulo
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        SweetAlert2Module.forRoot(),
        BrowserAnimationsModule,
        ToastrModule.forRoot()], providers: [
        // Servicios y estrategias de reutilización de rutas que serán provistos por este módulo
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {}

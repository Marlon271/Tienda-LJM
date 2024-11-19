import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Componentes de Productos
import { MenuComponent } from './menu/menu.component';
import { CreateComponent } from './crudProductos/create.component';
import { UpdateComponent } from './crudProductos/update.component';
import { AllComponent } from './crudProductos/all.component';
import { FindByIdComponent } from './crudProductos/find-by-id.component';

// Componentes de Pedidos
import { AllPedidoComponent } from './crudPedidos/all-pedido.component';
import { UpdatePedidoComponent } from './crudPedidos/update-pedido.component';
import { FindByIdPedidoComponent } from './crudPedidos/find-by-id-pedido.component';
import { CreatePedidoComponent } from './crudPedidos/create-pedido.component';
import { CalcularValorPagarComponent } from './crudPedidos/calcular-valor-pagar/calcular-valor-pagar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateComponent,
    UpdateComponent,
    AllComponent,
    FindByIdComponent,
    AllPedidoComponent,
    UpdatePedidoComponent,
    FindByIdPedidoComponent,
    CreatePedidoComponent,
    CalcularValorPagarComponent // Asegúrate de que el componente esté aquí
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule, // Importa FormsModule para habilitar ngModel
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withInterceptorsFromDi())
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Se añade aquí para soportar elementos personalizados
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

  


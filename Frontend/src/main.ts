// Importa enableProdMode de @angular/core para habilitar el modo de producción
import { enableProdMode } from '@angular/core';
// Importa platformBrowserDynamic para arrancar la aplicación en el navegador
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importa AppModule, el módulo raíz de la aplicación Angular
import { AppModule } from './app/app.module';
// Importa el archivo de configuración del entorno para determinar si la aplicación está en modo de producción
import { environment } from './environments/environment';

// Si la aplicación está configurada para ejecutarse en modo de producción
if (environment.production) {
  enableProdMode(); // Habilita el modo de producción, lo que desactiva las aserciones de Angular y otros cheques
}

// Arranca el módulo raíz AppModule en la plataforma del navegador
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err)); // Captura y registra errores en la consola si el arranque falla

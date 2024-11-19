// Importa el decorador Component de Angular para definir un componente y su metadata
import { Component } from '@angular/core';

// Decorador Component que especifica metadatos para el componente AppComponent
@Component({
  selector: 'app-root', // Selector CSS que define el elemento HTML en el que se instanciará el componente
  templateUrl: 'app.component.html', // Ruta al archivo de plantilla HTML del componente
})
export class AppComponent {
  // Constructor de la clase, se ejecuta al crear una instancia del componente
  constructor() {}
}


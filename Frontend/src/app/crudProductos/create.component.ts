// Importaciones necesarias de Angular y otros módulos
import { Component, OnInit } from '@angular/core';
import { Producto } from '../entity/producto'; // Entidad Producto
import { ProductoService } from '../service/producto.service'; // Servicio para operaciones CRUD de productos
import { Router } from '@angular/router'; // Módulo de enrutamiento de Angular para la navegación

// Decorador que define un componente Angular
@Component({
  selector: 'app-create', // Selector del componente utilizado en HTML
  templateUrl: './create.component.html', // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./create.component.css'], // Ruta a los estilos CSS específicos del componente
})
export class CreateComponent {
  // Propiedad 'producto' inicializada con valores por defecto para un nuevo producto
  producto: Producto = { id: 0, nombre: '', precio: 0 };

  // Constructor del componente, inyecta servicios y módulos necesarios
  constructor(
    private productoService: ProductoService, // Inyección del servicio de productos
    private router: Router // Inyección del router para la navegación
  ) {}

  // Método para guardar un nuevo producto
  saveProducto() {
    // Llama al servicio para crear un nuevo producto y suscribe al resultado
    this.productoService.createProducto(this.producto).subscribe(() => {
      // Navega a la ruta '/productos' después de crear el producto
      this.router.navigate(['/productos']);
    });
  }
}

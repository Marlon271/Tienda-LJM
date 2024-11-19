// Importaciones necesarias de Angular y otros módulos
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Módulos para manejar rutas y navegación
import { Producto } from '../entity/producto'; // Entidad Producto
import { ProductoService } from '../service/producto.service'; // Servicio para operaciones CRUD de productos

// Decorador que define un componente Angular
@Component({
  selector: 'app-find-by-id', // Selector del componente utilizado en HTML
  templateUrl: './find-by-id.component.html', // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./find-by-id.component.css'], // Ruta a los estilos CSS específicos del componente
})
export class FindByIdComponent implements OnInit {
  // Propiedad 'producto' que puede ser indefinida o de tipo Producto
  producto: Producto | undefined;

  // Constructor del componente, inyecta servicios y módulos necesarios
  constructor(
    private route: ActivatedRoute, // Inyección del servicio ActivatedRoute para acceder a parámetros de ruta
    private productoService: ProductoService, // Inyección del servicio de productos
    private router: Router // Inyección del router para la navegación
  ) {}

  // Método del ciclo de vida que se ejecuta al inicializar el componente
  ngOnInit() {
    this.getProducto(); // Llama al método para obtener un producto por ID
  }

  // Método para obtener un producto por su ID
  getProducto(): void {
    // Obtiene el ID del producto desde los parámetros de la ruta actual
    const id = this.route.snapshot.params['id'];
    // Llama al servicio para obtener el producto por ID y suscribe al resultado
    this.productoService.getProductoById(id).subscribe( 
      data => {
        this.producto = data; // Asigna el producto obtenido a la propiedad 'producto'
      },
      err => {
        this.router.navigate(['']); // Navega a la ruta raíz si hay un error
      }
    );
  }
}

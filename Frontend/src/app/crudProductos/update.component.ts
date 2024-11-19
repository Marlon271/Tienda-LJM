// Importaciones necesarias de Angular y otros módulos
import { Component, OnInit } from '@angular/core';
import { Producto } from '../entity/producto'; // Entidad Producto
import { ActivatedRoute, Router } from '@angular/router'; // Módulos para manejar rutas y navegación
import { ProductoService } from '../service/producto.service'; // Servicio para operaciones CRUD de productos
import { ToastrService } from 'ngx-toastr'; // Servicio para mostrar notificaciones

// Decorador que define un componente Angular
@Component({
  selector: 'app-update', // Selector del componente utilizado en HTML
  templateUrl: './update.component.html', // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./update.component.css'], // Ruta a los estilos CSS específicos del componente
})
export class UpdateComponent implements OnInit {
  // Propiedad 'id' para almacenar el ID del producto, inicializada posteriormente
  id!: number;
  // Propiedad 'producto' para almacenar el producto actual, inicializada posteriormente
  producto!: Producto;

  // Constructor del componente, inyecta servicios y módulos necesarios
  constructor(
    private productoService: ProductoService, // Inyección del servicio de productos
    private router: Router, // Inyección del router para la navegación
    private activatedRoute: ActivatedRoute, // Inyección del servicio ActivatedRoute para acceder a parámetros de ruta
    private toast: ToastrService // Inyección del servicio Toastr para mostrar notificaciones
  ) {}

  // Método del ciclo de vida que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.getProducto(); // Llama al método para obtener los detalles del producto
  }  

  // Método para actualizar el producto
  onUpdate(): void {
    // Llama al servicio para actualizar el producto y suscribe al resultado
    this.productoService.updateProducto(this.id, this.producto).subscribe(
      data => {
        // Navega a la página principal después de una actualización exitosa
        this.router.navigate(['']);
      },
      err => {
        // Muestra un mensaje de error si la actualización falla
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }

  // Método para obtener los detalles del producto por ID
  getProducto(): void {
    // Obtiene el ID del producto desde los parámetros de la ruta actual
    this.id = this.activatedRoute.snapshot.params['id'];
    // Llama al servicio para obtener el producto por ID y suscribe al resultado
    this.productoService.getProductoById(this.id).subscribe(
      data => {
        this.producto = data; // Asigna el producto obtenido a la propiedad 'producto'
      },
      err => {
        // Muestra un mensaje de error y navega a la página principal si hay un error
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      }
    );
  }
}


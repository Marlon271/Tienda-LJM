// Importaciones necesarias de Angular y otros módulos
import { Component, OnInit } from '@angular/core';
import { Producto } from '../entity/producto'; // Entidad Producto
import { ProductoService } from '../service/producto.service'; // Servicio para operaciones CRUD de productos
import { ToastrService } from 'ngx-toastr'; // Servicio para mostrar notificaciones

// Decorador que define un componente Angular
@Component({
  selector: 'app-all', // Selector del componente utilizado en HTML
  templateUrl: './all.component.html', // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./all.component.css'], // Ruta a los estilos CSS específicos del componente
})
export class AllComponent implements OnInit {
  // Array para almacenar los productos obtenidos del servicio
  productos: Producto[] = [];

  // Constructor del componente, inyecta servicios necesarios
  constructor(
    private productoService: ProductoService, // Inyección del servicio de productos
    private toast: ToastrService // Inyección del servicio Toastr para mostrar notificaciones
  ) { }

  // Método del ciclo de vida que se ejecuta al inicializar el componente
  ngOnInit() {
    this.loadProductos(); // Llama al método para cargar los productos
  }

  // Método para cargar los productos desde el servicio
  loadProductos() {
    // Suscribe al observable que obtiene los productos y asigna los datos al array 'productos'
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  // Método para eliminar un producto por su ID
  deleteProducto(id: number) {
    // Llama al servicio para eliminar el producto y suscribe al resultado
    this.productoService.deleteProducto(id).subscribe(
      data => {
        this.loadProductos(); // Recarga los productos después de eliminar uno
      },
      err => {
        // Muestra una notificación de error si falla la eliminación
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }
}

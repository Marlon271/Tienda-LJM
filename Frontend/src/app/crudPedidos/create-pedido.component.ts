// Importaciones necesarias de Angular y otros módulos
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../entity/pedido'; // Entidad Pedido
import { PedidoService } from '../service/pedido.service'; // Servicio para operaciones CRUD de pedidos
import { Router } from '@angular/router'; // Módulo de enrutamiento de Angular para la navegación
import { Producto } from '../entity/producto'; // Entidad Producto
import { ProductoService } from '../service/producto.service'; // Servicio para operaciones CRUD de productos
import { ToastrService } from 'ngx-toastr'; // Servicio para mostrar notificaciones

// Decorador que define un componente Angular
@Component({
  selector: 'app-create-pedido', // Selector del componente utilizado en HTML
  templateUrl: './create-pedido.component.html', // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./create-pedido.component.css'], // Ruta a los estilos CSS específicos del componente
})
export class CreatePedidoComponent implements OnInit {
  // Propiedad 'pedido' inicializada con valores por defecto para un nuevo pedido
  pedido: Pedido = { id: 0, cantidad: 0, fecha: '', producto: null };
  // Array para almacenar los productos obtenidos del servicio
  productos: Producto[] = [];

  // Constructor del componente, inyecta servicios y módulos necesarios
  constructor(
    private pedidoService: PedidoService, // Inyección del servicio de pedidos
    private productoService: ProductoService, // Inyección del servicio de productos
    private router: Router // Inyección del router para la navegación
  ) {}

  // Método del ciclo de vida que se ejecuta al inicializar el componente
  ngOnInit() {
    this.loadProductos(); // Llama al método para cargar los productos
  }

  // Método para obtener y asignar los productos al array 'productos'
  loadProductos() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data; // Asigna los productos obtenidos a la propiedad 'productos'
    });
  }

  // Método para guardar un nuevo pedido
  savePedido() {
    this.pedidoService.createPedido(this.pedido).subscribe(() => {
      this.router.navigate(['/pedidos']); // Navega a la ruta '/pedidos' después de guardar el pedido
    });
  }
}


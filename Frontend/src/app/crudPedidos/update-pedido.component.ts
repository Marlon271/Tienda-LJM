// Importaciones necesarias de Angular y otros módulos
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../entity/pedido'; // Entidad Pedido
import { PedidoService } from '../service/pedido.service'; // Servicio para operaciones CRUD de pedidos
import { ActivatedRoute, Router } from '@angular/router'; // Módulos para manejar rutas y navegación
import { ToastrService } from 'ngx-toastr'; // Servicio para mostrar notificaciones

// Decorador que define un componente Angular
@Component({
  selector: 'app-update-pedido', // Selector del componente utilizado en HTML
  templateUrl: './update-pedido.component.html', // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./update-pedido.component.css'], // Ruta a los estilos CSS específicos del componente
})
export class UpdatePedidoComponent implements OnInit {
  // Propiedad 'id' para almacenar el ID del pedido, inicializada posteriormente
  id!: number;
  // Propiedad 'pedido' para almacenar el pedido actual, inicializada posteriormente
  pedido!: Pedido;

  // Constructor del componente, inyecta servicios y módulos necesarios
  constructor(
    private pedidoService: PedidoService, // Inyección del servicio de pedidos
    private router: Router, // Inyección del router para la navegación
    private activatedRoute: ActivatedRoute, // Inyección del servicio ActivatedRoute para acceder a parámetros de ruta
    private toast: ToastrService // Inyección del servicio Toastr para mostrar notificaciones
  ) {}

  // Método del ciclo de vida que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.getPedido(); // Llama al método para obtener los detalles del pedido
  }  

  // Método para actualizar el pedido
  onUpdate(): void {
    // Llama al servicio para actualizar el pedido y suscribe al resultado
    this.pedidoService.updatePedido(this.id, this.pedido).subscribe(
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

  // Método para obtener los detalles del pedido por ID
  getPedido(): void {
    // Obtiene el ID del pedido desde los parámetros de la ruta actual
    this.id = this.activatedRoute.snapshot.params['id'];
    // Llama al servicio para obtener el pedido por ID y suscribe al resultado
    this.pedidoService.getPedidoById(this.id).subscribe(
      data => {
        // Asigna el pedido obtenido a la propiedad 'pedido'
        this.pedido = data;
      },
      err => {
        // Muestra un mensaje de error y navega a la página principal si hay un error
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      }
    );
  }
}

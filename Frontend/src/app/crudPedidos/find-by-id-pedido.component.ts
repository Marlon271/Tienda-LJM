// Importaciones necesarias de Angular y otros módulos
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../entity/pedido'; // Entidad Pedido
import { PedidoService } from '../service/pedido.service'; // Servicio para operaciones CRUD de pedidos
import { ActivatedRoute, Router } from '@angular/router'; // Módulos para manejar rutas y navegación

// Decorador que define un componente Angular
@Component({
  selector: 'app-find-by-id-pedido', // Selector del componente utilizado en HTML
  templateUrl: './find-by-id-pedido.component.html', // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./find-by-id-pedido.component.css'], // Ruta a los estilos CSS específicos del componente
})
export class FindByIdPedidoComponent implements OnInit {
  // Propiedad 'pedido' que puede ser indefinida o de tipo Pedido
  pedido: Pedido | undefined;

  // Constructor del componente, inyecta servicios y módulos necesarios
  constructor(
    private route: ActivatedRoute, // Inyección del servicio ActivatedRoute para acceder a parámetros de ruta
    private pedidoService: PedidoService, // Inyección del servicio de pedidos
    private router: Router // Inyección del router para la navegación
  ) {}

  // Método del ciclo de vida que se ejecuta al inicializar el componente
  ngOnInit() {
    this.getpedido(); // Llama al método para obtener un pedido por ID
  }

  // Método para obtener un pedido por su ID
  getpedido(): void {
    // Obtiene el ID del pedido desde los parámetros de la ruta actual
    const id = this.route.snapshot.params['id'];
    // Llama al servicio para obtener el pedido por ID y suscribe al resultado
    this.pedidoService.getPedidoById(id).subscribe( 
      data => {
        this.pedido = data; // Asigna el pedido obtenido a la propiedad 'pedido'
      },
      err => {
        this.router.navigate(['']); // Navega a la ruta raíz si hay un error
      }
    );
  }
}

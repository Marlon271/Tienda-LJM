// Importaciones necesarias de Angular y módulos externos
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../entity/pedido';           // Entidad Pedido
import { PedidoService } from '../service/pedido.service'; // Servicio para operaciones con pedidos
import { ToastrService } from 'ngx-toastr';          // Para mostrar notificaciones

@Component({
    selector: 'app-all-pedido',                  // Selector del componente
    templateUrl: './all-pedido.component.html', // Ruta del archivo HTML
    styleUrls: ['./all-pedido.component.css']   // Ruta del archivo CSS
})
export class AllPedidoComponent implements OnInit {
    // Array para almacenar los pedidos obtenidos del servicio
    pedidos: Pedido[] = [];   
    
    // Constructor, inyecta el servicio de pedidos y el servicio de notificaciones
    constructor(private pedidoService: PedidoService, private toast: ToastrService) {}

    // Método que se ejecuta al inicializar el componente
    ngOnInit() {
        this.loadPedidos(); // Carga los pedidos al iniciar
    }

    // Método para cargar los pedidos desde el servicio
    loadPedidos() {
        this.pedidoService.getPedidos().subscribe(data => {
            this.pedidos = data; // Asigna los pedidos obtenidos al array
        });
    }

    // Método para eliminar un pedido por su ID
    deleteProducto(id: number) {
        this.pedidoService.deletePedido(id).subscribe(
            data => {
                this.loadPedidos(); // Recarga los pedidos después de eliminar
            },
            err => {
                // Muestra una notificación de error si falla la eliminación
                this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' }); 
            }
        );
    }
}

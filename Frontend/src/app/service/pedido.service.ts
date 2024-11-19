// Importación de módulos necesarios para realizar peticiones HTTP y manejar inyección de dependencias
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Importación del archivo de configuración de entorno para obtener la URL base de la API
import { environment } from 'src/environments/environment';
// Importación de la entidad Pedido para tipar los objetos y las respuestas de la API
import { Pedido } from '../entity/pedido';
// Importación de Observable de RxJS para manejar operaciones asíncronas y flujos de datos
import { Observable } from 'rxjs';

// Decorador que marca la clase como disponible para ser provista e inyectada como dependencia
@Injectable({
  providedIn: 'root' // Indica que el servicio está disponible en el root injector y es de ámbito singleton
})
export class PedidoService {
  // URL base para las peticiones relacionadas con pedidos, obtenida del archivo de entorno
  pedidoURL = environment.apiResrURL + '/pedido';

  // Constructor que inyecta el cliente HTTP para realizar peticiones
  constructor(private httpClient: HttpClient) { }

  // Método para obtener todos los pedidos desde el servidor
  getPedidos(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.pedidoURL);
  }

  // Método para obtener un pedido específico por su ID
  getPedidoById(id: number): Observable<Pedido> {
    return this.httpClient.get<Pedido>(`${this.pedidoURL}/${id}`);
  }

  // Método para crear un nuevo pedido en el servidor
  createPedido(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.pedidoURL, pedido);
  }

  // Método para actualizar un pedido existente por su ID
  updatePedido(id: number, pedido: Pedido): Observable<Pedido> {
    return this.httpClient.put<Pedido>(`${this.pedidoURL}/${id}`, pedido);
  }

  // Método para eliminar un pedido del servidor por su ID
  deletePedido(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.pedidoURL}/${id}`);
  }
}

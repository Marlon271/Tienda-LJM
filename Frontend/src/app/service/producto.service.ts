// Importa HttpClient para realizar solicitudes HTTP y Injectable para la inyección de dependencias
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Importa el entorno para acceder a variables de entorno como la URL de la API
import { environment } from 'src/environments/environment';
// Importa la entidad Producto para tipar los objetos de productos
import { Producto } from '../entity/producto';
// Importa Observable de RxJS para manejar respuestas asíncronas de las solicitudes HTTP
import { Observable } from 'rxjs';

// Decorador Injectable que marca la clase como un servicio que puede ser inyectado
@Injectable({
  providedIn: 'root' // Indica que el servicio está disponible en el ámbito global de la aplicación
})
export class ProductoService {
  // Construye la URL base para las solicitudes de productos usando la URL de la API del entorno
  productoURL = environment.apiResrURL + '/producto';

  // Inyecta el HttpClient en el constructor para realizar las solicitudes HTTP
  constructor(private httpClient: HttpClient) { }

  // Método para obtener un array de productos desde el servidor
  getProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL);
  }

  // Método para obtener un producto específico por su ID
  getProductoById(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.productoURL}/${id}`);
  }

  // Método para crear un nuevo producto en el servidor
  createProducto(producto: Producto): Observable<Producto> {
    return this.httpClient.post<Producto>(this.productoURL, producto);
  }

  // Método para actualizar un producto existente por su ID
  updateProducto(id: number, producto: Producto): Observable<Producto> {
    return this.httpClient.put<Producto>(`${this.productoURL}/${id}`, producto);
  }

  // Método para eliminar un producto del servidor por su ID
  deleteProducto(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.productoURL}/${id}`);
  }
}

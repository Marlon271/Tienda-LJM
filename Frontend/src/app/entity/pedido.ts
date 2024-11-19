// Importación de la entidad Producto desde el archivo 'producto.ts'
import { Producto } from "./producto";

// Definición de la interfaz Pedido
export interface Pedido {
    id: number; // Identificador único para el pedido
    cantidad: number; // Cantidad de productos en el pedido
    fecha: string; // Fecha del pedido en formato de cadena
    producto: Producto | null; // Producto asociado al pedido, puede ser nulo si no hay producto
}

### Documentación del Proyecto

# Tienda LJM

**Presentado por:**  
- Romero Trujillo Marlos David  
- Trujillo Bonilla Julián Alberto  
- Vargas Herrera José Leonardo  

---

## Descripción General del Proyecto

**Objetivo:**  
Facilitar la compra de ropa masculina de alta calidad a través de una plataforma móvil, ofreciendo una amplia variedad de estilos para satisfacer las necesidades del hombre moderno. Esta plataforma está especializada para el comercio en Neiva.  

**Tecnologías utilizadas:**  
- **Backend:** Spring Boot con Java.  
- **Frontend:** Ionic con Angular.  

---

## Funcionalidades Principales

### Frontend
- **Agregar productos:** Los usuarios pueden añadir productos al catálogo.
- **Eliminar productos:** Permite la gestión del inventario eliminando productos.
- **Editar productos:** Facilita la actualización de información de productos.
- **Gestión de pedidos:** Validación y eliminación de pedidos realizados.

### Backend
- **Diseño de la arquitectura de la base de datos:** Base de datos relacional optimizada para la gestión de productos y pedidos.
- **Implementación de rutas API:** Proporciona endpoints para la interacción entre el frontend y la base de datos.

---


---

## Modelo Entidad Relación (MER)

El diseño MER incluye las tablas necesarias para la gestión de productos y pedidos, adaptado a las necesidades específicas de la tienda LJM.

---

## Requisitos Funcionales y No Funcionales

### Requisitos Funcionales
1. **Gestión de productos:**  
   - Agregar, editar y eliminar productos del catálogo.  
2. **Gestión de pedidos:**  
   - Validar y procesar pedidos realizados por los usuarios.  
3. **Inicio de sesión:**  
   - Permite el acceso de usuarios y administradores al sistema.  

### Requisitos No Funcionales
1. **Compatibilidad:**  
   - Compatible con navegadores modernos y dispositivos móviles Android.  
2. **Seguridad:**  
   - Mecanismos de autenticación y autorización para usuarios.  
3. **Rendimiento:**  
   - Respuesta en menos de 2 segundos bajo carga normal.  

---

## Configuración de la Base de Datos

**Base de datos utilizada:** PostgreSQL  

**Pasos para la configuración:**
1. Importar el esquema de la base de datos en pgAdmin 4.  
2. Configurar el contenedor Docker para ejecutar PostgreSQL y pgAdmin.  
3. Verificar que las tablas estén correctamente implementadas.

**Estructura de las Tablas:**

### Tabla de Productos
| **Campo**   | **Tipo**  | **Clave** | **Descripción**             |
|-------------|-----------|-----------|-----------------------------|
| id          | INT       | PK        | Identificador único del producto. |
| nombre      | VARCHAR   |           | Nombre del producto.        |
| precio      | DECIMAL   |           | Precio del producto.        |
| categoria   | VARCHAR   |           | Categoría del producto.     |

### Tabla de Pedidos
| **Campo**         | **Tipo**     | **Clave** | **Descripción**              |
|--------------------|--------------|-----------|------------------------------|
| id                | INT          | PK        | Identificador único del pedido. |
| usuarioId         | INT          | FK        | Identificador del usuario que realizó el pedido. |
| total             | DECIMAL      |           | Monto total del pedido.      |
| fecha             | TIMESTAMP    |           | Fecha en la que se realizó el pedido. |

---

## Script de Base de Datos

```sql
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    usuarioId INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);
```

---

## Resultado

La Tienda LJM es una plataforma eficiente para la gestión de productos y pedidos, adaptada a las necesidades del comercio en Neiva, optimizando tanto el backend como el frontend para un rendimiento y experiencia de usuario excepcionales.

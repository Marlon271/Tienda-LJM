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
- **Base de Datos:** MySQL.  
- **Aplicación Móvil:** Generada con Ionic para dispositivos Android.  

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

## Asignación de Roles

| **Integrante**                  | **Función**                                |
|---------------------------------|--------------------------------------------|
| Romero Trujillo Marlos David    | Desarrollo de backend y base de datos.     |
| Trujillo Bonilla Julián Alberto | Diseño y desarrollo del frontend.          |
| Vargas Herrera José Leonardo    | Integración de API y manejo de vistas.     |

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

**Base de datos utilizada:** MySQL  

**Pasos para la configuración:**
1. Instalar **MySQL** en el sistema (puedes usar **XAMPP** o **MySQL Workbench**).  
2. Importar el esquema de la base de datos en MySQL Workbench.  
3. Verificar que las tablas estén correctamente implementadas ejecutando el script proporcionado.

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
CREATE DATABASE TiendaLJM;

USE TiendaLJM;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);
```

---

## Descarga de Recursos

- **Aplicación móvil:**  
  Generada con **Ionic** para dispositivos Android. Puedes descargarla y abrirla desde tu dispositivo móvil:  
  [Descargar APK]!(app-debug.apk).  

  > Si estás navegando desde tu dispositivo móvil, haz clic en el enlace para iniciar la descarga y luego abre el archivo para instalar la aplicación.  

- **Presentación PowerPoint:**  
  [Descargar presentación](proyecto.pptx).  

---

## Resultado

La Tienda LJM es una plataforma eficiente para la gestión de productos y pedidos, adaptada a las necesidades del comercio en Neiva. La integración entre el frontend y el backend, junto con el uso de MySQL como base de datos, garantiza un rendimiento óptimo y una experiencia de usuario satisfactoria. La aplicación móvil permite una gestión cómoda desde cualquier dispositivo Android.

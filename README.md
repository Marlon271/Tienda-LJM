
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

## Modelo Entidad Relación (MER)

El diseño MER incluye las tablas necesarias para la gestión de productos y pedidos, adaptado a las necesidades específicas de la tienda LJM.
[Descargar presentación](proyecto.pptx)
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

---

## Pasos para Despliegue

### Clonación del proyecto
```bash
git clone <URL-del-repositorio>
```

### Sincronización de cambios
```bash
git pull
```

### Modificación o publicación
```bash
git pull
git add -A
git commit -m "Mensaje que informe el cambio"
git push
```

### Instalación y despliegue del Frontend
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar servidor de desarrollo:
   ```bash
   ng serve
   ```

### Instalación y despliegue del Backend
1. Configurar conexión con la base de datos en `application.properties`.  
2. Iniciar el servidor backend con Spring Boot por debug.  

### Generación del APK
1. Instalar Capacitor Android:
   ```bash
   npm install @capacitor/android
   ```
2. Agregar plataforma Android:
   ```bash
   npx cap add android
   ```
3. Compilar el proyecto:
   ```bash
   ionic build
   ```
4. Verificar configuración de Capacitor:
   ```bash
   npx cap ls
   ```
5. Copiar el proyecto a Android:
   ```bash
   npx cap copy android
   ```
6. Abrir en Android Studio:
   ```bash
   npx cap open android
   ```

---

## Evidencias del Proyecto

### Imágenes


![Evidencia 1](./evidencias/1.png)
![Evidencia 2](./evidencias/2.png)
![Evidencia 3](./evidencias/3.png)
![Evidencia 4](./evidencias/4.png)
![Evidencia 5](./evidencias/5.png)
![Evidencia 6](./evidencias/6.png)
![Evidencia 7](./evidencias/7.png)
![Evidencia 8](./evidencias/8.png)


![apk](./evidencias/9.png)
![apk](./evidencias/10.png)
![apk](./evidencias/11.png)
![apk](./evidencias/12.png)
```

---

## Descarga de Recursos

- **Aplicación móvil:**  
  Generada con **Ionic** para dispositivos Android. Puedes descargarla y abrirla desde tu dispositivo móvil:  
  [Descargar APK](app-debug.apk).  

  > Si estás navegando desde tu dispositivo móvil, haz clic en el enlace para iniciar la descarga y luego abre el archivo para instalar la aplicación.  

---

## Resultado

La Tienda LJM es una plataforma eficiente para la gestión de productos y pedidos, adaptada a las necesidades del comercio en Neiva. La integración entre el frontend y el backend, junto con el uso de MySQL como base de datos, garantiza un rendimiento óptimo y una experiencia de usuario satisfactoria. La aplicación móvil permite una gestión cómoda desde cualquier dispositivo Android.
```



# Manual Técnico - Soluciones Digitales Andinas S.A.S

---

## Índice

1. [Descripción General del Proyecto](#1 descripción general del proyecto)  
2. [Componentes Frontend](#2-componentes frontend)  
   2.1 [Componente Contacto](#21 componente contacto)  
      - HTML  
      - CSS  
      - TypeScript  
      - Servicio  
      - Pruebas Unitarias  
   2.2 [Componente App](#22 componente app)  
      - HTML  
      - TypeScript  
      - Pruebas Unitarias  
3. [Configuración y Rutas](#3 configuración y rutas)  
   3.1 [app.config.ts]  
   3.2 [app.routes.ts]  
4. [Archivos de Configuración](#4 archivos de configuración)  
   4.1 [angular.json]  
   4.2 [package-lock.json]  
   4.3 [.editorconfig]  
5. [Backend Node.js](#5 backend nodejs)  
   5.1 [server.js]  
6. [Punto de Entrada](#6 punto de entrada)  
   6.1 [main.ts]  

---

## 1. Descripción General del Proyecto

Aplicación web construida con Angular 15 para presentar la oferta de Soluciones Digitales Andinas S.A.S. Incluye página corporativa, portafolio de servicios, sección institucional, formulario de contacto y módulo de administración con backend Node.js.

Características principales:

- Landing de inicio con hero interactivo y resumen de servicios.  
- Portafolio dinámico con carrusel responsivo.  
- Formulario de contacto con validaciones y simulación de respuesta.  
- Autenticación con base de datos JSON.  
- Panel de administración CRUD con modificación directa de archivos JSON.  
- API REST con Node.js + Express para gestión de servicios.  
- Contador de vistas y sistema de likes con persistencia local.  
- Navbar y footer glassmorphism compatibles con móviles.

---

## 2. Componentes Frontend

### 2.1 Componente Contacto

#### HTML

Contenedor con dos secciones: información y formulario. Incluye validaciones, mensajes de feedback, y accesibilidad.

#### CSS

- Diseño con gradientes, blur, sombras y animaciones suaves.  
- Responsividad para dispositivos móviles y tablets.  
- Accesibilidad: soporte para reducción de movimiento.  
- Clases principales: .contact page container, .contact card, .info side, .form side, .btn, .feedback banner.

#### TypeScript

- Formulario reactivo con validaciones para nombre, correo y mensaje.  
- Envío mediante servicio ContactoService con manejo de éxito y error.  
- Animaciones activadas tras renderizado.  
- Uso de inyección moderna inject().

#### Servicio (contacto.service.ts)

- Simula envío de formulario con validación básica.  
- Retorna observable con respuesta simulada.  
- Manejo de errores con catchError.  
- Interfaces tipadas para payload y respuesta.

#### Pruebas Unitarias (contacto.service.spec.ts)

- Verifica creación del servicio.  
- Recomendación: ampliar con pruebas de envío y manejo de errores.

---

### 2.2 Componente App

#### HTML

- Contenido placeholder con logo SVG, título y enlaces útiles.  
- Uso de variables CSS para colores y gradientes.  
- Sección social con iconos SVG y enlaces externos.  
- <router-outlet> para carga dinámica de rutas.

#### TypeScript

- Componente raíz standalone con template solo <router outlet>.  
- Importa módulos CommonModule y RouterOutlet.  
- Propiedad title para identificación.

#### Pruebas Unitarias (app.component.spec.ts)

- Verifica creación del componente.  
- Comprueba título correcto.  
- Prueba renderizado del título en el DOM.

---

## 3. Configuración y Rutas

### 3.1 app.config.ts

- Configura la aplicación con ApplicationConfig.  
- Proveedores para detección de cambios optimizada y enrutamiento con provideRouter.  
- Uso de eventCoalescing para mejorar performance.

### 3.2 app.routes.ts

- Define rutas principales:  
  - /contacto carga ContactoComponent.  
  - Ruta raíz redirige a /contacto.  
  - Ruta comodín redirige a /contacto para manejo de errores 404.

---

## 4. Archivos de Configuración

### 4.1 angular.json

- Configuración de build, serve, test y extract-i18n.  
- Define entradas, estilos, assets y scripts.  
- Configuraciones separadas para producción y desarrollo.  
- Presupuestos de tamaño para control de bundle.

### 4.2 package-lock.json

- Archivo generado automáticamente que fija versiones exactas de dependencias y subdependencias.  
- Garantiza instalaciones reproducibles y consistentes.  
- No modificar manualmente.

### 4.3 .editorconfig

- Define reglas de estilo para editores:  
  - UTF-8, espacios de 2, final de línea, comillas simples para TS.  
  - No recortar espacios en Markdown.  
- Mejora la consistencia del código y colaboración.

---

## 5. Backend Node.js

### server.js

- Servidor Express escuchando en puerto 3000.  
- Permite operaciones CRUD sobre servicios.json.  
- Endpoints:  
  - GET /api/servicios  
  - PUT /api/servicios  
  - POST /api/servicios  
  - PATCH /api/servicios/:id  
  - DELETE /api/servicios/:id  
- Manejo básico de errores y validaciones.  
- Persistencia simple en archivos JSON.

---

## 6. Punto de Entrada

### main.ts

- Inicializa la aplicación Angular con bootstrapApplication.  
- Usa AppComponent como raíz y appConfig para configuración global.  
- Soporta standalone components y configuración modular.

---
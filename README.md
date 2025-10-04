# Soluciones Digitales Andinas S.A.S

Aplicación web construida con Angular 15 para presentar la oferta de Soluciones Digitales Andinas S.A.S: página corporativa, portafolio de servicios, sección institucional, formulario de contacto y módulo de administración con backend Node.js.

## Características principales

- Landing de inicio con hero interactivo y resumen de servicios.
- Portafolio dinámico en la ruta /servicios con carrusel responsivo y enlaces a detalle.
- Página Nosotros con storytelling y tarjetas de valor.
- Formulario de contacto funcional con validaciones y simulación de respuesta.
- Autenticación con base de datos JSON y persistencia de sesión.
- Panel de administración CRUD con modificación directa de archivos JSON.
- API REST con Node.js + Express para gestión de servicios.
- Contador de vistas y sistema de likes con persistencia local.
- Navbar y footer glassmorphism unificados, compatibles con móviles.

## Requisitos previos

- Node.js 18 o superior.
- Angular CLI 15 (npm install -g @angular/cli).

## Instalación

    npm install

## Ejecutar en desarrollo

### Opcion 1: Todo junto (recomendado)

    npm run dev

Esto inicia el backend (puerto 3000) y Angular (puerto 4200) simultaneamente.

### Opcion 2: Por separado

Terminal 1 - Backend:

    npm run server

Terminal 2 - Angular:

    npm run start:dev

Visita http://localhost:4200/ y navega por las rutas principales: /home, /servicios, /nosotros, /contacto y /login (desde allí se accede a /admin tras autenticación).

## Ejecutar en produccion (local)

    npm run build
    npm start

Visita http://localhost:3000/

## Credenciales de acceso

- Email: admin@empresa.com
- Password: admin123

## Construir para producción

    ng build

Los artefactos quedan en la carpeta dist/.

## Ejecutar pruebas unitarias

    ng test

Actualmente existen pruebas básicas generadas por Angular CLI; agrega más conforme evolucione el proyecto.

## Estructura del proyecto

    proyecto/
    ├── server.js                    (servidor backend Node.js)
    ├── src/
    │   ├── assets/data/
    │   │   ├── servicios.json      (base de datos de servicios)
    │   │   ├── servicios-detalle.json
    │   │   └── usuarios.json       (base de datos de usuarios)
    │   └── app/
    │       ├── pages/              (componentes de paginas)
    │       └── shared/             (servicios compartidos)

## Funcionalidades del CRUD

El panel de administración permite:

- Ver todos los servicios con estadisticas dinamicas
- Crear nuevos servicios
- Editar servicios existentes (nombre, descripcion, precio, estado)
- Eliminar servicios
- Activar/desactivar servicios
- Marcar servicios como nuevos
- Los cambios se guardan directamente en servicios.json

## API REST

Endpoints disponibles:

- GET /api/servicios - Obtener todos los servicios
- POST /api/servicios - Crear nuevo servicio
- PATCH /api/servicios/:id - Actualizar servicio
- DELETE /api/servicios/:id - Eliminar servicio

## Deploy en Render

1. Crear cuenta en render.com
2. Conectar repositorio GitHub
3. Configurar:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Deploy automatico

El proyecto ya esta configurado para produccion. Render ejecutara:
- `npm install` (instala dependencias)
- `postinstall` hook ejecuta `ng build` automaticamente
- `npm start` ejecuta `node server-prod.js`

## Contacto

- Email: glossaga@gmail.com
- Teléfono: +57 301 695 3408
- Dirección: Calle Ficticia #12-34, Cocorná, Antioquia, Colombia

---

Proyecto mantenido por el equipo de Soluciones Digitales Andinas S.A.S.

# Soluciones Digitales Andinas S.A.S

Aplicación web construida con Angular 15 para presentar la oferta de Soluciones Digitales Andinas S.A.S: página corporativa, portafolio de servicios, sección institucional, formulario de contacto y módulo de administración.

## Características principales

- Landing de inicio con hero interactivo y resumen de servicios.
- Portafolio dinámico en la ruta /servicios con carrusel responsivo y enlaces a detalle.
- Página Nosotros con storytelling y tarjetas de valor.
- Formulario de contacto funcional con validaciones y simulación de respuesta.
- Autenticación básica para acceder al panel /admin.
- Navbar y footer glassmorphism unificados, compatibles con móviles.

## Requisitos previos

- Node.js 18 o superior.
- Angular CLI 15 (npm install -g @angular/cli).

## Instalación

    npm install

## Ejecutar en desarrollo

    ng serve

Visita http://localhost:4200/ y navega por las rutas principales: /home, /servicios, /nosotros, /contacto y /login (desde allí se accede a /admin tras autenticación).

## Construir para producción

    ng build

Los artefactos quedan en la carpeta dist/.

## Ejecutar pruebas unitarias

    ng test

Actualmente existen pruebas básicas generadas por Angular CLI; agrega más conforme evolucione el proyecto.

## Contacto

- Email: glossaga@gmail.com
- Teléfono: +57 301 695 3408
- Dirección: Calle Ficticia #12-34, Cocorná, Antioquia, Colombia

---

Proyecto mantenido por el equipo de Soluciones Digitales Andinas S.A.S.

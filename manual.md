# Manual de la Aplicación: Soluciones Digitales Andinas S.A.S

## Guía por funciones

Este manual documenta las 25 funcionalidades principales de la aplicación, organizadas por orden de importancia y uso frecuente.

---

## FUNCIONES PRINCIPALES PARA USUARIOS

---

### Función 1: Visualizar página de inicio (Home)

**Descripción:**  
Página principal que presenta la empresa, sus servicios y propuesta de valor. Incluye información institucional, listado de servicios principales y sección "Nosotros" con misión, visión y valores.

**Cómo usarla:**
1. Abrir la aplicación en un navegador web
2. La página de inicio se carga automáticamente
3. Navegar por las secciones: Hero, Servicios y Nosotros

**Ejemplo:**  
Al ingresar a la URL, el usuario ve el banner principal con "Soluciones Digitales Andinas S.A.S", descripción de servicios tecnológicos, y tres tarjetas informativas sobre innovación, soluciones a medida y acompañamiento integral.

**Resultado esperado:**  
Visualización completa de la página de inicio con toda la información corporativa y acceso a botones "Empezar ahora" y "Ver más".

---

### Función 2: Visualizar portafolio de servicios

**Descripción:**  
Muestra el catálogo completo de servicios tecnológicos ofrecidos por la empresa con scroll horizontal, descripciones, precios y características.

**Cómo usarla:**
1. Hacer clic en "Servicios" en el menú de navegación
2. Usar las flechas laterales para navegar por los servicios
3. Hacer clic en cualquier tarjeta para ver detalles completos

**Ejemplo:**  
El usuario accede a la sección Servicios y visualiza tarjetas con servicios como "Desarrollo Web", "Apps Móviles", "Consultoría", cada una con descripción, precio y lista de características incluidas.

**Resultado esperado:**  
Catálogo interactivo con navegación horizontal fluida y acceso rápido a detalles de cada servicio.

---

### Función 3: Ver detalle completo de un servicio

**Descripción:**  
Permite visualizar información detallada de un servicio específico, incluyendo descripción extendida, precio, características, contador de vistas y opciones de interacción (like, carrito).

**Cómo usarla:**
1. Desde el portafolio, hacer clic en un servicio
2. Revisar toda la información detallada
3. Usar los botones de "like" o "agregar al carrito"

**Ejemplo:**  
Al seleccionar "Desarrollo Web Empresarial", se muestra una página completa con descripción detallada, precio formateado, lista de características, contador de vistas y opciones para marcar como favorito o agregar al carrito.

**Resultado esperado:**  
Página de detalle con toda la información del servicio y opciones de interacción activas.

---

### Función 4: Enviar formulario de contacto

**Descripción:**  
Formulario de contacto con validaciones que permite a los usuarios enviar mensajes a la empresa.

**Cómo usarla:**
1. Hacer clic en "Contacto" en el menú
2. Completar los campos: nombre (mínimo 3 caracteres), correo electrónico válido y mensaje (mínimo 10 caracteres)
3. Hacer clic en "Enviar"

**Ejemplo:**  
Ana Pérez completa el formulario con su nombre, correo "ana.perez@empresa.com" y mensaje "Necesito información sobre desarrollo web para mi negocio". Al enviar, recibe confirmación de envío exitoso.

**Resultado esperado:**  
Mensaje de confirmación verde indicando "Mensaje enviado con éxito" y el formulario se limpia automáticamente.

---

### Función 5: Validación de formulario de contacto

**Descripción:**  
Sistema de validación en tiempo real que verifica que los datos ingresados cumplan con los requisitos antes de permitir el envío.

**Cómo usarla:**
1. Completar el formulario de contacto
2. Observar mensajes de error en campos inválidos
3. Corregir errores antes de enviar

**Ejemplo:**  
Si el usuario ingresa "ana@mail" (correo inválido), aparece mensaje de error "Por favor ingrese un correo electrónico válido". Si el mensaje tiene menos de 10 caracteres, muestra "El mensaje debe tener al menos 10 caracteres".

**Resultado esperado:**  
Validación en tiempo real con mensajes claros que guían al usuario para completar correctamente el formulario.

---

### Función 6: Navegación entre secciones

**Descripción:**  
Sistema de navegación mediante menú principal que permite moverse entre las diferentes secciones de la aplicación sin recargar la página completa (SPA - Single Page Application).

**Cómo usarla:**
1. Usar el menú de navegación superior
2. Hacer clic en: Home, Servicios, Nosotros, Contacto o Login
3. La sección se carga instantáneamente

**Ejemplo:**  
El usuario está en "Home", hace clic en "Servicios" y la página cambia instantáneamente sin recarga completa. Luego hace clic en "Contacto" y el formulario aparece de inmediato.

**Resultado esperado:**  
Navegación fluida y rápida entre secciones sin tiempos de espera ni recargas de página.

---

### Función 7: Marcar servicios como favoritos (Like)

**Descripción:**  
Sistema que permite a los usuarios marcar servicios de su interés como favoritos. El estado se guarda en el navegador mediante localStorage.

**Cómo usarla:**
1. Entrar al detalle de un servicio
2. Hacer clic en el icono de "like" (corazón)
3. El icono cambia para indicar que está marcado como favorito

**Ejemplo:**  
Un usuario interesado en "Consultoría en Seguridad" hace clic en el corazón. El icono se llena y el servicio queda marcado como favorito, persistiendo incluso al cerrar y reabrir el navegador.

**Resultado esperado:**  
El servicio se marca como favorito y el estado persiste en futuras visitas.

---

### Función 8: Contador de vistas de servicios

**Descripción:**  
Registra automáticamente cada vez que un usuario visualiza el detalle de un servicio, mostrando el número total de vistas.

**Cómo usarla:**
1. Acceder al detalle de cualquier servicio
2. El contador se incrementa automáticamente
3. El número de vistas se muestra en la página

**Ejemplo:**  
Al entrar al detalle de "Apps Móviles", el contador muestra "15 vistas". Al recargar la página, el contador incrementa a "16 vistas".

**Resultado esperado:**  
Contador visible que se incrementa automáticamente con cada visita al detalle del servicio.

---

### Función 9: Agregar servicios al carrito

**Descripción:**  
Permite marcar servicios de interés para potencial contratación mediante un icono de carrito.

**Cómo usarla:**
1. En la página de detalle del servicio
2. Hacer clic en el icono del carrito
3. El icono cambia para indicar que está en el carrito

**Ejemplo:**  
Un usuario interesado en contratar "Migración a la Nube" hace clic en el carrito. El icono cambia a "carrito lleno" indicando el interés en ese servicio.

**Resultado esperado:**  
El icono del carrito cambia de estado para reflejar que el servicio está seleccionado.

---

### Función 10: Diseño responsivo

**Descripción:**  
La interfaz se adapta automáticamente a diferentes tamaños de pantalla (móvil, tablet, escritorio) para garantizar una experiencia óptima en cualquier dispositivo.

**Cómo usarla:**
1. Abrir la aplicación en cualquier dispositivo
2. La interfaz se ajusta automáticamente
3. El menú se convierte en hamburguesa en móviles

**Ejemplo:**  
En un celular, el menú de navegación se convierte en un icono de hamburguesa. Las tarjetas de servicios se apilan verticalmente. En tablet, se muestran 2 columnas. En escritorio, se visualizan 3 o más columnas.

**Resultado esperado:**  
Interfaz perfectamente adaptada al tamaño de pantalla del dispositivo, manteniendo usabilidad y estética.

---

## FUNCIONES DE ADMINISTRACIÓN

---

### Función 11: Iniciar sesión (Login)

**Descripción:**  
Sistema de autenticación que permite a usuarios autorizados acceder al panel de administración mediante credenciales válidas.

**Cómo usarla:**
1. Hacer clic en "Login" en el menú o botón "Empezar ahora"
2. Ingresar correo electrónico y contraseña
3. Hacer clic en "Iniciar sesión"

**Ejemplo:**  
El administrador ingresa email "admin@solucionesandinas.com" y su contraseña. Si las credenciales son correctas, es redirigido al panel de administración. Si son incorrectas, recibe mensaje "Correo o contraseña incorrectos".

**Resultado esperado:**  
Acceso al panel de administración si las credenciales son válidas, o mensaje de error si son incorrectas.

---

### Función 12: Panel de administración con estadísticas

**Descripción:**  
Dashboard administrativo que muestra estadísticas en tiempo real: total de servicios, servicios activos y servicios nuevos, junto con la lista completa de servicios para gestión.

**Cómo usarla:**
1. Iniciar sesión como administrador
2. Acceder automáticamente al panel de administración
3. Visualizar las estadísticas en la parte superior

**Ejemplo:**  
El panel muestra: "Total Servicios: 12", "Servicios Activos: 10", "Servicios Nuevos: 3". Debajo aparece la tabla completa con todos los servicios registrados.

**Resultado esperado:**  
Dashboard con estadísticas actualizadas y acceso completo a la gestión de servicios.

---

### Función 13: Crear un nuevo servicio

**Descripción:**  
Permite agregar servicios al portafolio mediante un modal con formulario completo que incluye todos los campos necesarios.

**Cómo usarla:**
1. En el panel de administración, hacer clic en "Agregar servicio" o botón "+"
2. Completar el formulario en el modal: nombre, descripción, precio, características, etc.
3. Hacer clic en "Guardar"

**Ejemplo:**  
El administrador crea un nuevo servicio "Desarrollo de Apps Móviles" con descripción "Aplicaciones nativas para iOS y Android", precio "5000000", y lista de características. Al guardar, el servicio aparece inmediatamente en el portafolio.

**Resultado esperado:**  
Nuevo servicio creado y visible tanto en el panel de administración como en el portafolio público.

---

### Función 14: Editar un servicio existente

**Descripción:**  
Permite modificar cualquier campo de un servicio ya registrado mediante el mismo modal de creación pero con datos precargados.

**Cómo usarla:**
1. En la lista de servicios, hacer clic en el botón "Editar" del servicio deseado
2. Modificar los campos necesarios en el modal
3. Hacer clic en "Guardar cambios"

**Ejemplo:**  
El administrador edita "Soporte Técnico" para actualizar el precio de $800,000 a $950,000 y agregar "Soporte 24/7" a las características. Los cambios se reflejan inmediatamente.

**Resultado esperado:**  
Servicio actualizado con los nuevos datos en toda la aplicación.

---

### Función 15: Eliminar un servicio

**Descripción:**  
Permite eliminar permanentemente un servicio del portafolio con confirmación previa para evitar eliminaciones accidentales.

**Cómo usarla:**
1. En la lista de servicios, hacer clic en el botón "Eliminar"
2. Confirmar la eliminación en el diálogo que aparece
3. El servicio se elimina inmediatamente

**Ejemplo:**  
El administrador decide eliminar el servicio obsoleto "Consultoría Básica". Al hacer clic en eliminar, aparece confirmación "¿Eliminar este servicio?". Al confirmar, el servicio desaparece del portafolio.

**Resultado esperado:**  
Servicio eliminado permanentemente de la base de datos y del portafolio público.

---

### Función 16: Cerrar sesión (Logout)

**Descripción:**  
Permite al usuario administrador cerrar su sesión de forma segura y regresar a la vista pública.

**Cómo usarla:**
1. Estando autenticado, hacer clic en "Cerrar sesión" en el menú
2. La sesión se cierra automáticamente
3. Se redirige a la página de login

**Ejemplo:**  
El administrador termina su trabajo y hace clic en "Cerrar sesión". La aplicación elimina los datos de autenticación y lo redirige al login.

**Resultado esperado:**  
Sesión cerrada correctamente y redirección a la página de login.

---

### Función 17: Protección de rutas administrativas

**Descripción:**  
Sistema de seguridad (Auth Guard) que impide el acceso al panel de administración a usuarios no autenticados, redirigiendo automáticamente al login.

**Cómo usarla:**
1. La protección funciona automáticamente
2. Si un usuario no autenticado intenta acceder a /admin, es redirigido a /login
3. Solo usuarios autenticados pueden acceder

**Ejemplo:**  
Un visitante intenta acceder directamente a la URL "/admin". El sistema detecta que no está autenticado y lo redirige automáticamente a "/login".

**Resultado esperado:**  
Acceso denegado a rutas administrativas para usuarios no autenticados, con redirección automática al login.

---

## FUNCIONES DE API (Backend)

---

### Función 18: Obtener lista de servicios (GET)

**Descripción:**  
Endpoint de API que devuelve la lista completa de servicios en formato JSON.

**Cómo usarla:**
1. Realizar petición GET a `http://localhost:3000/api/servicios`
2. Recibir array JSON con todos los servicios

**Ejemplo:**  
```javascript
fetch('http://localhost:3000/api/servicios')
  .then(res => res.json())
  .then(data => console.log(data));
```

**Resultado esperado:**  
Respuesta JSON con array de servicios: `[{id, nombre, descripcion, precio, ...}, ...]`

---

### Función 19: Agregar servicio vía API (POST)

**Descripción:**  
Endpoint que permite crear un nuevo servicio enviando los datos en formato JSON.

**Cómo usarla:**
1. Enviar petición POST a `http://localhost:3000/api/servicios`
2. Incluir datos del servicio en el body
3. Recibir confirmación

**Ejemplo:**  
```javascript
fetch('http://localhost:3000/api/servicios', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({nombre: 'Nuevo Servicio', precio: 1000000})
})
```

**Resultado esperado:**  
Respuesta: `{message: "Servicio agregado", servicio: {...}}`

---

### Función 20: Actualizar servicio vía API (PATCH)

**Descripción:**  
Endpoint que permite modificar campos específicos de un servicio existente mediante su ID.

**Cómo usarla:**
1. Enviar petición PATCH a `http://localhost:3000/api/servicios/:id`
2. Incluir solo los campos a modificar en el body
3. Recibir confirmación

**Ejemplo:**  
```javascript
fetch('http://localhost:3000/api/servicios/servicio-1', {
  method: 'PATCH',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({precio: 1500000})
})
```

**Resultado esperado:**  
Respuesta: `{message: "Servicio actualizado", servicio: {...}}` o error 404 si no existe.

---

### Función 21: Eliminar servicio vía API (DELETE)

**Descripción:**  
Endpoint que permite eliminar un servicio mediante su ID.

**Cómo usarla:**
1. Enviar petición DELETE a `http://localhost:3000/api/servicios/:id`
2. Recibir confirmación de eliminación

**Ejemplo:**  
```javascript
fetch('http://localhost:3000/api/servicios/servicio-3', {
  method: 'DELETE'
})
```

**Resultado esperado:**  
Respuesta: `{message: "Servicio eliminado"}` o error 404 si el servicio no existe.

---

### Función 22: Reemplazar lista completa de servicios (PUT)

**Descripción:**  
Endpoint que permite reemplazar toda la lista de servicios con un nuevo array completo.

**Cómo usarla:**
1. Enviar petición PUT a `http://localhost:3000/api/servicios`
2. Incluir array completo de servicios en el body
3. La lista anterior se reemplaza completamente

**Ejemplo:**  
```javascript
fetch('http://localhost:3000/api/servicios', {
  method: 'PUT',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify([{id: '1', nombre: 'Servicio 1'}, {id: '2', nombre: 'Servicio 2'}])
})
```

**Resultado esperado:**  
Respuesta: `{message: "Servicios actualizados correctamente", servicios: [...]}`

---

### Función 23: Manejo de errores en API

**Descripción:**  
El backend responde con mensajes de error claros y códigos HTTP apropiados cuando ocurren problemas en las peticiones.

**Cómo usarla:**
1. Realizar peticiones a la API
2. En caso de error, recibir respuesta con código HTTP y mensaje descriptivo

**Ejemplo:**  
Al intentar eliminar un servicio inexistente con ID "servicio-999", la API responde:
- Código: 404
- Body: `{error: "Servicio no encontrado"}`

**Resultado esperado:**  
Mensajes de error claros que facilitan la depuración: 400 (datos inválidos), 404 (no encontrado), 500 (error del servidor).

---

## FUNCIONES DE INTERFAZ

---

### Función 24: Notificaciones de éxito y error

**Descripción:**  
Sistema de mensajes visuales que informa al usuario sobre el resultado de sus acciones (formularios, operaciones CRUD, etc.).

**Cómo usarla:**
1. Realizar cualquier acción (enviar formulario, guardar servicio, etc.)
2. Observar el mensaje que aparece automáticamente
3. Los mensajes desaparecen después de unos segundos

**Ejemplo:**  
Al enviar el formulario de contacto correctamente, aparece un banner verde con "✓ Mensaje enviado con éxito". Si hay error, aparece banner rojo con "✗ Error al enviar el mensaje".

**Resultado esperado:**  
Feedback visual claro e inmediato sobre el resultado de cada acción del usuario.

---

### Función 25: Menú de navegación responsivo

**Descripción:**  
Menú principal que se adapta a diferentes dispositivos: menú horizontal en escritorio y menú hamburguesa en móviles.

**Cómo usarla:**
1. En escritorio: usar el menú horizontal superior
2. En móvil: hacer clic en el icono de hamburguesa para abrir/cerrar el menú
3. Hacer clic en cualquier opción para navegar

**Ejemplo:**  
En un celular, el usuario hace clic en el icono ☰ (hamburguesa), se despliega el menú vertical con todas las opciones. Al seleccionar "Servicios", el menú se cierra automáticamente y navega a la sección.

**Resultado esperado:**  
Menú accesible y funcional en todos los dispositivos con comportamiento adaptado al tamaño de pantalla.

---

## INFORMACIÓN ADICIONAL

### Requisitos del sistema
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Conexión a internet para carga inicial

### Tecnologías utilizadas
- **Frontend:** Angular 17, TypeScript, CSS3
- **Backend:** Node.js, Express
- **Base de datos:** JSON (archivos locales)
- **Autenticación:** LocalStorage

### Soporte y contacto
Para asistencia técnica o consultas sobre la aplicación, utilizar el formulario de contacto integrado en la plataforma.

---

**Versión del manual:** 2.0  
**Última actualización:** Octubre 2025  
**Total de funciones documentadas:** 25

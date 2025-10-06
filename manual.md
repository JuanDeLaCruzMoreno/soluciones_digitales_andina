# Manual de la Aplicación: Soluciones Digitales Andinas S.A.S

## Guía por funciones

---

### Función 1: Visualizar página corporativa

---

*Descripción:*  
Permite al usuario acceder a la sección principal con información institucional sobre Soluciones Digitales Andinas S.A.S.

---

*Cómo usarla:*

1. Abrir la aplicación en un navegador compatible.  
2. Seleccionar la opción *Inicio* o *Página principal* en el menú.

---

*Ejemplo:*  
Al ingresar la URL de la aplicación, el usuario ve el logo y una descripción sobre la empresa, incluyendo misión y visión.

---

*Resultado esperado:*  
Se muestra la información institucional, misión, visión y valores de la empresa.

---

### Función 2: Visualizar portafolio de servicios

---

*Descripción:*  
Permite explorar la lista dinámica de servicios que ofrece la empresa.

---

*Cómo usarla:*

1. Entrar a la sección *Portafolio* desde el menú principal.  
2. Navegar por los servicios disponibles.

---

*Ejemplo:*  
El usuario selecciona “Portafolio” y visualiza servicios como desarrollo web, consultoría y soporte técnico, con descripciones y precios.

---

*Resultado esperado:*  
Se despliega un listado con detalles de cada servicio.

---

### Función 3: Enviar formulario de contacto

---

*Descripción:*  
Permite enviar mensajes a la empresa mediante un formulario con validaciones.

---

*Cómo usarla:*

1. Ir a la sección *Contacto*.  
2. Completar los campos (nombre, correo, mensaje).  
3. Presionar *Enviar*.

---

*Ejemplo:*  
Un usuario escribe su nombre “Ana Pérez”, correo “ana@mail.com” y un mensaje solicitando información, luego envía el formulario.

---

*Resultado esperado:*  
El formulario se valida y envía, mostrando confirmación o error.

---

### Función 4: Validación de formulario de contacto

---

*Descripción:*  
Garantiza que los datos ingresados cumplan reglas antes de enviar el formulario.

---

*Cómo usarla:*

1. Completar el formulario.  
2. Corregir cualquier error indicado en los mensajes.

---

*Ejemplo:*  
Si el usuario ingresa un correo inválido “ana@mail”, aparece un mensaje “Por favor ingrese un correo válido”.

---

*Resultado esperado:*  
Solo se permite enviar el formulario si todos los campos son correctos.

---

### Función 5: Acceso al módulo de administración

---

*Descripción:*  
Permite a usuarios autorizados ingresar al panel de administración para gestionar servicios.

---

*Cómo usarla:*

1. Ingresar credenciales en la página de login (si aplica).  
2. Acceder al panel administrativo.

---

*Ejemplo:*  
El administrador ingresa usuario y contraseña válidos y accede al panel para gestionar servicios.

---

*Resultado esperado:*  
Se muestra el panel con opciones para administrar servicios.

---

### Función 6: Listar servicios en administración

---

*Descripción:*  
Muestra todos los servicios disponibles para gestión en el backend.

---

*Cómo usarla:*

1. En el módulo administración, seleccionar *Servicios*.  
2. Visualizar la lista completa.

---

*Ejemplo:*  
El administrador ve una tabla con todos los servicios registrados, con opciones para editar o eliminar.

---

*Resultado esperado:*  
Se despliega el listado actualizado de servicios.

---

### Función 7: Crear un nuevo servicio

---

*Descripción:*  
Permite agregar un servicio nuevo al portafolio desde el panel administrativo.

---

*Cómo usarla:*

1. En administración, seleccionar *Agregar servicio*.  
2. Completar los datos requeridos.  
3. Guardar cambios.

---

*Ejemplo:*  
El administrador agrega un servicio “Desarrollo de apps móviles” con descripción y precio, luego guarda.

---

*Resultado esperado:*  
El servicio se añade y aparece en el portafolio.

---

### Función 8: Editar un servicio existente

---

*Descripción:*  
Permite modificar los datos de un servicio registrado.

---

*Cómo usarla:*

1. Seleccionar un servicio en la lista.  
2. Modificar los campos necesarios.  
3. Guardar los cambios.

---

*Ejemplo:*  
El administrador cambia la descripción de un servicio “Soporte técnico” para incluir soporte 24/7.

---

*Resultado esperado:*  
El servicio se actualiza con la información modificada.

---

### Función 9: Eliminar un servicio

---

*Descripción:*  
Permite borrar un servicio del portafolio.

---

*Cómo usarla:*

1. Seleccionar un servicio en la lista.  
2. Confirmar la eliminación.

---

*Ejemplo:*  
El administrador elimina un servicio obsoleto llamado “Consultoría básica”.

---

*Resultado esperado:*  
El servicio desaparece del listado y deja de estar disponible.

---

### Función 10: Actualizar lista completa de servicios vía API

---

*Descripción:*  
Permite reemplazar todos los servicios mediante una solicitud PUT al backend.

---

*Cómo usarla:*

1. Enviar un JSON con la lista completa a /api/servicios usando PUT.

---

*Ejemplo:*  
Un script automatizado envía un nuevo archivo JSON con servicios actualizados para reemplazar la lista actual.

---

*Resultado esperado:*  
La lista de servicios se actualiza en el backend.

---

### Función 11: Agregar servicio vía API

---

*Descripción:*  
Permite agregar un servicio mediante solicitud POST.

---

*Cómo usarla:*

1. Enviar los datos del servicio a /api/servicios con POST.

---

*Ejemplo:*  
Un sistema externo envía un nuevo servicio “Marketing digital” para agregarlo al portafolio.

---

*Resultado esperado:*  
El servicio se añade al backend y estará disponible.

---

### Función 12: Actualizar servicio específico vía API

---

*Descripción:*  
Permite modificar parcialmente un servicio mediante PATCH a /api/servicios/:id.

---

*Cómo usarla:*

1. Enviar datos modificados al endpoint con el id correspondiente.

---

*Ejemplo:*  
Se actualiza solo el precio de un servicio con id 5 mediante PATCH.

---

*Resultado esperado:*  
El servicio se actualiza con los datos enviados.

---

### Función 13: Eliminar servicio vía API

---

*Descripción:*  
Permite eliminar un servicio mediante DELETE a /api/servicios/:id.

---

*Cómo usarla:*

1. Enviar solicitud DELETE con el id del servicio.

---

*Ejemplo:*  
Se elimina el servicio con id 3 enviando DELETE a la API.

---

*Resultado esperado:*  
El servicio se elimina del backend.

---

### Función 14: Navegación entre secciones

---

*Descripción:*  
Permite cambiar entre páginas como Inicio, Portafolio y Contacto sin recargar toda la aplicación.

---

*Cómo usarla:*

1. Usar el menú principal para seleccionar la sección deseada.

---

*Ejemplo:*  
El usuario hace clic en “Contacto” y la página carga el formulario sin recargar toda la app.

---

*Resultado esperado:*  
Carga rápida y fluida de la sección seleccionada.

---

### Función 15: Diseño responsivo

---

*Descripción:*  
La aplicación adapta su interfaz para dispositivos móviles, tablets y escritorio.

---

*Cómo usarla:*

1. Abrir la aplicación en diferentes dispositivos o cambiar tamaño de ventana.

---

*Ejemplo:*  
El usuario abre la app en su celular y la interfaz se ajusta para facilitar la lectura.

---

*Resultado esperado:*  
Interfaz ajustada para facilitar la lectura y navegación.

---

### Función 16: Mostrar notificaciones de éxito o error

---

*Descripción:*  
Informa al usuario sobre el resultado de acciones como envío de formularios o gestión de servicios.

---

*Cómo usarla:*

1. Realizar una acción (ej. enviar formulario).  
2. Observar el mensaje que aparece.

---

*Ejemplo:*  
Después de enviar el formulario de contacto correctamente, aparece un banner verde con el mensaje “Mensaje enviado con éxito”.

---

*Resultado esperado:*  
Se muestra un mensaje claro indicando éxito o error.

---

### Función 17: Uso de iconos sociales

---

*Descripción:*  
Permite acceder a redes sociales desde la aplicación.

---

*Cómo usarla:*

1. Hacer clic en los iconos sociales disponibles en la página principal.

---

*Ejemplo:*  
El usuario hace clic en el icono de Facebook y se abre la página oficial en una nueva pestaña.

---

*Resultado esperado:*  
Se abre la red social correspondiente en una nueva pestaña.

---

### Función 18: Configuración de estilos y temas

---

*Descripción:*  
La aplicación utiliza variables CSS para mantener un diseño coherente con colores y gradientes.

---

*Cómo usarla:*

1. La configuración es automática, pero permite futuras personalizaciones.

---

*Ejemplo:*  
El diseño usa los colores morado, azul y verde para mantener la identidad visual.

---

*Resultado esperado:*  
Interfaz visual atractiva y homogénea.

---

### Función 19: Manejo de errores en backend

---

*Descripción:*  
El backend responde con mensajes claros ante errores en las solicitudes de API.

---

*Cómo usarla:*

1. Realizar una solicitud incorrecta o inválida.

---

*Ejemplo:*  
Al intentar eliminar un servicio inexistente, la API responde con un mensaje “Servicio no encontrado”.

---

*Resultado esperado:*  
Se recibe un mensaje explicativo del error.

---

### Función 20: Actualización de la aplicación

---

*Descripción:*  
Se recomienda mantener actualizados los archivos de configuración y dependencias para asegurar estabilidad.

---

*Cómo usarla:*

1. Consultar documentación para actualizar a nuevas versiones.  
2. Actualizar archivos angular.json, package-lock.json y otros.

---

*Ejemplo:*  
El equipo de desarrollo actualiza Angular y dependencias para corregir errores y mejorar rendimiento.

---

*Resultado esperado:*  
La aplicación se mantiene estable y con mejoras continuas.

---
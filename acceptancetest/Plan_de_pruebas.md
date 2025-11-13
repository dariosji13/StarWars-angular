Plan de Pruebas – API y Frontend StarWars

### Introducción

Se desarrolló una API y un Frontend con el objetivo de ofrecer a los usuarios la posibilidad de consultar y visualizar información detallada sobre personajes y sus vehículos asociados.

La necesidad surge de optimizar la experiencia del usuario al centralizar la información en una interfaz intuitiva, reduciendo tiempos de búsqueda y asegurando datos consistentes provenientes de una fuente confiable.

La API fue diseñada para exponer datos estructurados y accesibles, mientras que el Frontend permite una visualización clara y responsiva, facilitando la interacción con la información.

### Alcance

Validar que:

El Frontend muestre correctamente la información del personaje y sus vehículos asociados, manejando errores y estados de respuesta.

La API cumpla con los requisitos funcionales y no funcionales (estructura, datos, tiempos de respuesta).

El flujo completo E2E funcione correctamente asegurando la integración entre el Frontend y la API.

### Fuera del Alcance

Pruebas de seguridad avanzadas.

Pruebas de carga y estrés.

Cualquier verificación no incluida en la estrategia.

### Estrategia

Se ejecutarán pruebas de aceptación para la API y para el Frontend:

#### API

Método GET

Rendimiento básico: tiempos de respuesta.

Validación de estructura y tipo de datos.

#### Frontend

Visualización correcta de datos.

Manejo de errores y estados.

#### E2E

Comportamiento ante errores: API caída, ID inválido.

Flujo completo desde el consumo de la API hasta la visualización de los datos.

### Supuestos

Se realizará correctamente el despliegue de la implementación.

El ambiente y la conexión estarán estables.

Se contará con autorizaciones y permisos necesarios.

Se contará con usuarios con perfiles requeridos para pruebas.

Se contará con información para la configuración del ambiente.

La documentación define con exactitud la necesidad del cliente.

Se contará con apoyo del área de soluciones para aclarar dudas y resolver errores.

### Limitaciones

Disponibilidad del ambiente.

Demora en la solución de bugs.

Ambiente de pruebas no habilitado para ejecución.

### Datos e Infraestructura

Nombre de personajes válidos e inválidos para probar.

Personajes con y sin vehículos asociados.

Datos para escenarios de error (respuesta vacía, estructura inválida).

### Prerrequisitos

API desplegada.

Frontend accesible y conectado a la API.

Base de datos con datos de prueba.

Usuario de pruebas con permisos para ejecución.

### Equipo de Trabajo

Dueño del producto.

Líder de pruebas.

Equipo de desarrollo.

Equipo de QA.
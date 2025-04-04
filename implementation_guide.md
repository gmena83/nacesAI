# Guía de Implementación de Gamificación para NACES.AI

Este documento proporciona instrucciones detalladas para implementar los elementos de gamificación en el prototipo de NACES.AI, siguiendo el concepto de "taller artesanal-futurista" y el sistema de insignias solicitado.

## Estructura de Archivos

El prototipo con gamificación incluye los siguientes archivos:

```
nacesAI_gamification/
├── index.html           # Estructura principal de la landing page
├── css/
│   └── styles.css       # Estilos con elementos de taller y sistema de insignias
└── js/
    └── main.js          # Funcionalidades interactivas para las insignias
```

## Elementos de Gamificación Implementados

### 1. Estilo Visual "Taller Artesanal-Futurista"

Hemos implementado un diseño que combina elementos artesanales con toques futuristas:

- **Notas adhesivas**: Aparecen en diferentes partes de la página con apariencia de "sticky notes" de colores fluorescentes
- **Elementos decorativos**: Lápices, manchas de café, engranajes y líneas de circuito que dan la sensación de un taller creativo
- **Tipografía mixta**: Combinación de fuentes modernas con fuentes manuscritas para equilibrar lo artesanal con lo tecnológico
- **Efectos visuales**: Rotaciones aleatorias de elementos para dar sensación de "desorden creativo"

### 2. Sistema de Insignias Interactivo

El sistema de insignias implementado incluye:

- **5 insignias principales**: Constancia, Concentración, Customer Discovery, Plan de Negocio y Autocuidado
- **Diseño tipo sketch**: Las insignias tienen apariencia de notas adhesivas con dibujos tipo sketch
- **Interactividad**: Al hacer clic en cada insignia se abre un modal con detalles sobre:
  - Descripción de la insignia
  - Requisitos para obtenerla
  - Contenido que desbloquea al conseguirla
- **Animaciones**: Las insignias tienen efectos de hover y aparecen con animaciones al hacer scroll

### 3. Sección de Bienestar y Autocuidado

Se ha añadido una sección específica para destacar los elementos de autocuidado:

- **Explicación del enfoque**: Texto que describe la importancia del bienestar para personas neurodivergentes
- **Lista de actividades**: Ejemplos de retos de autocuidado como paseos al aire libre, ejercicios breves, etc.
- **Visualización creativa**: Representación visual de actividades de autocuidado en formato de notas adhesivas

## Instrucciones de Implementación

### Paso 1: Preparar el Entorno

1. Crea una carpeta llamada `nacesAI_gamification` en tu repositorio
2. Dentro de esta carpeta, crea dos subcarpetas: `css` y `js`

### Paso 2: Copiar los Archivos

1. Copia el archivo `index.html` en la carpeta principal `nacesAI_gamification`
2. Copia el archivo `styles.css` en la subcarpeta `css`
3. Copia el archivo `main.js` en la subcarpeta `js`

### Paso 3: Personalizar el Contenido

Para personalizar el prototipo según tus necesidades específicas:

#### Modificar las Insignias:

En el archivo `main.js`, encuentra el objeto `badgesData` y modifica:

```javascript
const badgesData = {
    'constancia': {
        title: 'Constancia',
        icon: '<i class="fas fa-calendar-check"></i>',
        description: 'Tu descripción personalizada...',
        requirements: [
            'Requisito 1',
            'Requisito 2',
            'Requisito 3'
        ],
        unlocks: 'Lo que desbloquea esta insignia...'
    },
    // Otras insignias...
}
```

#### Añadir Nuevas Insignias:

1. Añade un nuevo objeto en `badgesData` en `main.js`
2. Añade un nuevo elemento HTML en la sección de insignias en `index.html`:

```html
<div class="badge-item" data-badge="nueva-insignia">
    <div class="badge-sticky">
        <div class="badge-icon">
            <i class="fas fa-icon-name"></i>
        </div>
        <h3>Nombre de la Insignia</h3>
    </div>
</div>
```

3. Añade estilos específicos en `styles.css` si es necesario

### Paso 4: Ajustar el Estilo Visual

Para modificar el aspecto del "taller artesanal-futurista":

1. En `styles.css`, encuentra la sección `:root` para cambiar los colores:

```css
:root {
    --primary: #tu-color;
    --secondary: #tu-color;
    /* Otros colores... */
    --sticky-yellow: #tu-color;
    --sticky-blue: #tu-color;
    /* Otros colores de notas... */
}
```

2. Para ajustar los elementos decorativos, modifica la sección `.workshop-elements` en `styles.css`

### Paso 5: Probar la Interactividad

1. Abre el archivo `index.html` en un navegador
2. Verifica que puedas:
   - Hacer clic en las insignias para ver sus detalles
   - Navegar entre los diferentes tipos de neurodivergencia
   - Ver las animaciones al hacer scroll

## Adaptaciones para Diferentes Neurodivergencias

El prototipo incluye adaptaciones específicas para cada tipo de neurodivergencia:

### TDAH
- Mayor contraste visual
- Elementos ligeramente más grandes
- Colores más vibrantes

### TEA
- Estructura más ordenada
- Colores más suaves
- Menos elementos decorativos

### Dislexia
- Mayor espaciado entre líneas
- Mayor espaciado entre letras
- Colores cálidos

Estas adaptaciones se aplican automáticamente al seleccionar el tipo de neurodivergencia en la sección de demostración.

## Integración con Netlify

Para desplegar este prototipo en Netlify:

1. Sube todos los archivos a tu repositorio de GitHub
2. Sigue las instrucciones de la guía de despliegue de Netlify proporcionada anteriormente
3. Asegúrate de que la estructura de carpetas se mantenga intacta

## Próximos Pasos Recomendados

Para continuar desarrollando el concepto de gamificación:

1. **Crear contenido real**: Desarrolla el contenido educativo específico que se desbloquea con cada insignia
2. **Implementar sistema de progreso**: Añade una barra de progreso o un dashboard para que los usuarios vean su avance
3. **Desarrollar retos de autocuidado**: Crea una biblioteca de actividades de autocuidado específicas para cada tipo de neurodivergencia
4. **Añadir testimonios**: Incluye historias de éxito de personas neurodivergentes que han utilizado el sistema

Este prototipo proporciona una base sólida para mostrar cómo NACES.AI utilizará la gamificación para motivar a los usuarios mientras respeta sus necesidades específicas y promueve el autocuidado.

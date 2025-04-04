# Guía de Despliegue para NACES.AI en Netlify

Esta guía te proporcionará los pasos necesarios para desplegar el prototipo de NACES.AI en Netlify, una plataforma de hosting que ofrece despliegue continuo desde GitHub.

## Requisitos Previos

- Una cuenta de GitHub (ya tienes el repositorio creado en https://github.com/gmena83/nacesAI.git)
- Una cuenta en Netlify (puedes crear una gratis en [netlify.com](https://netlify.com))
- Los archivos del prototipo (HTML, CSS, JS) que ya hemos creado

## Paso 1: Subir los Archivos al Repositorio de GitHub

1. Abre una terminal en tu computadora
2. Clona el repositorio (si aún no lo has hecho):
   ```
   git clone https://github.com/gmena83/nacesAI.git
   ```
3. Navega al directorio del repositorio:
   ```
   cd nacesAI
   ```
4. Añade todos los archivos al repositorio:
   ```
   git add .
   ```
5. Realiza un commit con un mensaje descriptivo:
   ```
   git commit -m "Primer prototipo de NACES.AI"
   ```
6. Sube los cambios a GitHub:
   ```
   git push origin main
   ```

## Paso 2: Conectar Netlify con GitHub

1. Inicia sesión en [Netlify](https://app.netlify.com/)
2. Haz clic en "New site from Git"
3. Selecciona "GitHub" como tu proveedor de Git
4. Autoriza a Netlify para acceder a tus repositorios de GitHub si es necesario
5. Busca y selecciona el repositorio "nacesAI"

## Paso 3: Configurar las Opciones de Despliegue

En la pantalla de configuración de despliegue:

1. **Rama a desplegar**: Selecciona "main"
2. **Comando de construcción**: Deja este campo vacío, ya que no estamos usando un framework que requiera compilación
3. **Directorio de publicación**: Deja este campo como está (generalmente es "/")
4. Haz clic en "Deploy site"

## Paso 4: Personalizar el Dominio

Netlify asignará automáticamente un subdominio aleatorio (como random-words-123456.netlify.app). Para personalizarlo:

1. Ve a la página principal de tu sitio en el dashboard de Netlify
2. Haz clic en "Domain settings" o "Site settings"
3. En la sección "Domain management", haz clic en "Options" junto al dominio generado
4. Selecciona "Edit site name"
5. Ingresa un nombre personalizado, como "naces-ai"
6. Haz clic en "Save"

Tu sitio ahora estará disponible en algo como `naces-ai.netlify.app`

## Paso 5: Configurar el Formulario de Contacto

Para que el formulario de contacto funcione correctamente con Netlify:

1. Asegúrate de que el formulario en tu HTML tenga el atributo `data-netlify="true"` (ya está incluido en nuestro código)
2. En el dashboard de Netlify, ve a la sección "Forms"
3. Deberías ver tu formulario listado automáticamente después del primer envío
4. Puedes configurar notificaciones por correo electrónico para recibir alertas cuando alguien complete el formulario:
   - Ve a "Site settings" > "Forms" > "Form notifications"
   - Haz clic en "Add notification" y selecciona "Email notification"
   - Ingresa tu dirección de correo electrónico y guarda

## Paso 6: Verificar el Despliegue

1. Visita la URL de tu sitio (ejemplo: `naces-ai.netlify.app`)
2. Verifica que todas las páginas se carguen correctamente
3. Prueba la funcionalidad interactiva (selección de tipos de neurodivergencia)
4. Envía un formulario de prueba para verificar que funcione correctamente

## Paso 7: Configurar Despliegue Continuo

Una de las ventajas de Netlify es el despliegue continuo. Cada vez que hagas cambios en tu repositorio de GitHub, Netlify actualizará automáticamente tu sitio:

1. Realiza cambios en los archivos localmente
2. Haz commit y push a GitHub como en el Paso 1
3. Netlify detectará los cambios y desplegará automáticamente la nueva versión

## Paso 8: Monitorear el Rendimiento y Análisis

Netlify ofrece estadísticas básicas sobre tu sitio:

1. En el dashboard de Netlify, ve a la sección "Analytics"
2. Aquí podrás ver información sobre visitantes, páginas vistas, etc.
3. Para análisis más detallados, considera integrar Google Analytics:
   - Crea una cuenta en Google Analytics y obtén tu ID de seguimiento
   - Añade el código de seguimiento de Google Analytics en el `<head>` de tu archivo HTML
   - Haz commit y push de los cambios

## Solución de Problemas Comunes

### El sitio no se actualiza después de hacer cambios
- Verifica que hayas hecho push de tus cambios a GitHub
- Comprueba el estado del despliegue en el dashboard de Netlify
- Intenta hacer un despliegue manual desde el dashboard de Netlify

### El formulario no funciona
- Verifica que el atributo `data-netlify="true"` esté presente en el formulario
- Asegúrate de que todos los campos del formulario tengan el atributo `name`
- Revisa la sección "Forms" en el dashboard de Netlify para ver si hay errores

### Problemas con CSS o JavaScript
- Verifica las rutas a los archivos en el HTML
- Comprueba la consola del navegador para ver si hay errores
- Asegúrate de que los archivos se hayan subido correctamente a GitHub

## Próximos Pasos

Una vez que tu prototipo esté desplegado y funcionando correctamente, considera:

1. **Añadir el video explicativo**: Cuando tengas el video listo, súbelo a YouTube y actualiza el iframe en el HTML con la URL correcta.

2. **Personalizar el contenido**: Actualiza el texto, imágenes y estilos según tus preferencias.

3. **Añadir un dominio personalizado**: Si tienes un dominio propio, puedes configurarlo en Netlify para que tu sitio sea accesible desde tu dominio.

4. **Implementar análisis más avanzados**: Considera herramientas como Hotjar para mapas de calor y grabaciones de sesiones de usuario.

Esta guía te proporciona todos los pasos necesarios para desplegar tu prototipo de NACES.AI en Netlify. El proceso es relativamente sencillo y no requiere conocimientos avanzados de desarrollo web.

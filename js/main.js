// NACES.AI - JavaScript principal
// Funcionalidad para el prototipo interactivo

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const neurodivergenceButtons = document.querySelectorAll('.neurodivergence-btn');
    const adaptationContents = document.querySelectorAll('.adaptation-content');
    const demoFrame = document.getElementById('demo-frame');
    
    // Videos de demostración para cada tipo de neurodivergencia
    // Estos serían reemplazados por los videos reales cuando estén disponibles
    const demoVideos = {
        'tdah': 'https://www.youtube.com/embed/placeholder-tdah',
        'tea': 'https://www.youtube.com/embed/placeholder-tea',
        'dislexia': 'https://www.youtube.com/embed/placeholder-dislexia'
    };
    
    // Función para cambiar el tipo de neurodivergencia seleccionado
    function changeNeurodivergenceType(type) {
        // Actualizar botones
        neurodivergenceButtons.forEach(button => {
            if (button.dataset.type === type) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Actualizar contenido de adaptación
        adaptationContents.forEach(content => {
            if (content.id === `${type}-content`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
        
        // Actualizar video de demostración
        if (demoVideos[type]) {
            demoFrame.src = demoVideos[type];
        }
        
        // Aplicar clase de modo específico al body para estilos adaptados
        document.body.classList.remove('tdah-mode', 'tea-mode', 'dislexia-mode');
        document.body.classList.add(`${type}-mode`);
        
        // Registrar interacción (para futura implementación de análisis)
        console.log(`Tipo de neurodivergencia seleccionado: ${type}`);
    }
    
    // Asignar eventos a los botones de neurodivergencia
    neurodivergenceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.type;
            changeNeurodivergenceType(type);
        });
    });
    
    // Inicializar con TDAH seleccionado por defecto
    changeNeurodivergenceType('tdah');
    
    // Navegación suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulario de contacto con Netlify
    const contactForm = document.querySelector('form[name="contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Netlify maneja el envío del formulario automáticamente
            console.log('Formulario enviado');
            // Aquí se podría añadir código para mostrar un mensaje de confirmación
        });
    }
    
    // Animación simple para elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-item, .step, .stat-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar estilos para animación
    document.querySelectorAll('.feature-item, .step, .stat-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar
    
    // Función para crear un script de video explicativo
    function createExplanationScript() {
        // Este es un ejemplo de script para un video explicativo similar al de Dropbox
        const script = {
            intro: "Imagina un sistema educativo que realmente entiende cómo aprendes...",
            problem: "Para las personas neurodivergentes, la educación tradicional a menudo no funciona. Los cursos tienen un enfoque único que no se adapta a diferentes formas de pensar y aprender.",
            solution: "NACES.AI cambia esto. Nuestra plataforma utiliza inteligencia artificial para aprender cómo aprendes tú.",
            howItWorks: [
                "Primero, identificamos tu perfil de aprendizaje único.",
                "Luego, adaptamos el contenido educativo a tus necesidades específicas.",
                "A medida que interactúas con la plataforma, nuestro sistema aprende y mejora continuamente la experiencia.",
                "El resultado: un camino de aprendizaje personalizado que maximiza tu potencial."
            ],
            examples: {
                tdah: "Para alguien con TDAH, ofrecemos videos cortos, interactividad frecuente y recordatorios visuales.",
                tea: "Para personas con TEA, proporcionamos estructura clara, instrucciones explícitas y mínimas distracciones.",
                dislexia: "Para estudiantes con dislexia, adaptamos con fuentes especiales, opciones de audio y organizadores gráficos."
            },
            conclusion: "NACES.AI no solo enseña emprendimiento y tecnología, sino que también aprende contigo, creando una experiencia educativa verdaderamente inclusiva y efectiva."
        };
        
        console.log("Script para video explicativo creado");
        return script;
    }
    
    // Crear script para referencia (podría usarse para generar el video)
    const explanationScript = createExplanationScript();
});

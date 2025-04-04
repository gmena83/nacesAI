// NACES.AI - JavaScript principal con funcionalidades de gamificación
// Implementa interactividad para el prototipo con elementos de gamificación

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const neurodivergenceButtons = document.querySelectorAll('.neurodivergence-btn');
    const adaptationContents = document.querySelectorAll('.adaptation-content');
    const demoFrame = document.getElementById('demo-frame');
    const badgeItems = document.querySelectorAll('.badge-item');
    const badgeDetail = document.getElementById('badge-detail');
    const badgeDetailTitle = document.querySelector('.badge-detail-title');
    const badgeDetailDescription = document.querySelector('.badge-detail-description');
    const badgeRequirementsList = document.querySelector('.badge-requirements-list');
    const badgeUnlocksText = document.querySelector('.badge-unlocks-text');
    const badgeDetailIcon = document.querySelector('.badge-detail-icon');
    const closeBadge = document.querySelector('.close-badge');
    
    // Videos de demostración para cada tipo de neurodivergencia
    // Estos serían reemplazados por los videos reales cuando estén disponibles
    const demoVideos = {
        'tdah': 'https://www.youtube.com/embed/placeholder-tdah',
        'tea': 'https://www.youtube.com/embed/placeholder-tea',
        'dislexia': 'https://www.youtube.com/embed/placeholder-dislexia'
    };
    
    // Datos de las insignias
    const badgesData = {
        'constancia': {
            title: 'Constancia',
            icon: '<i class="fas fa-calendar-check"></i>',
            description: 'Esta insignia reconoce tu habilidad para mantener un ritmo constante de aprendizaje, adaptado a tus necesidades específicas.',
            requirements: [
                'Completa al menos una lección cada día durante 5 días (no necesariamente consecutivos)',
                'Establece y cumple un horario de estudio personalizado',
                'Completa un módulo completo a tu propio ritmo'
            ],
            unlocks: 'Desbloquea el módulo "Hábitos de Estudio Efectivos" y la posibilidad de personalizar tu calendario de aprendizaje.'
        },
        'concentracion': {
            title: 'Concentración',
            icon: '<i class="fas fa-brain"></i>',
            description: 'Esta insignia celebra tu capacidad para mantener el enfoque durante las sesiones de aprendizaje.',
            requirements: [
                'Completa una lección completa sin minimizar la aplicación',
                'Utiliza la técnica de pomodoro (25 minutos de concentración, 5 de descanso) 3 veces',
                'Completa los ejercicios de atención plena'
            ],
            unlocks: 'Desbloquea herramientas avanzadas de concentración y técnicas personalizadas para tu tipo de neurodivergencia.'
        },
        'customer': {
            title: 'Customer Discovery',
            icon: '<i class="fas fa-comments"></i>',
            description: 'Esta insignia reconoce tus habilidades para entender las necesidades de tus potenciales clientes.',
            requirements: [
                'Entrevista a 5 personas sobre sus problemas relacionados con tu idea de negocio',
                'Crea un mapa de empatía para tu cliente ideal',
                'Identifica al menos 3 puntos de dolor específicos que tu producto/servicio podría resolver'
            ],
            unlocks: 'Desbloquea el módulo "Validación de Ideas de Negocio" y herramientas para análisis de entrevistas.'
        },
        'plan': {
            title: 'Plan de Negocio',
            icon: '<i class="fas fa-file-alt"></i>',
            description: 'Esta insignia celebra tu capacidad para estructurar y documentar tu idea de negocio de manera efectiva.',
            requirements: [
                'Completa todas las secciones del modelo de negocio canvas',
                'Define tu propuesta de valor única',
                'Crea un plan financiero básico para tu idea'
            ],
            unlocks: 'Desbloquea el módulo "Lanzamiento de tu Negocio" y herramientas para la presentación a inversores.'
        },
        'autocuidado': {
            title: 'Autocuidado',
            icon: '<i class="fas fa-heart"></i>',
            description: 'Esta insignia reconoce la importancia que das al equilibrio entre el aprendizaje y tu bienestar personal.',
            requirements: [
                'Completa 5 actividades de autocuidado diferentes (paseo al aire libre, ejercicio breve, etc.)',
                'Mantén un registro de descansos activos durante tus sesiones de estudio',
                'Establece y respeta límites de tiempo de pantalla'
            ],
            unlocks: 'Desbloquea el módulo "Bienestar para Emprendedores" y un sistema personalizado de recordatorios de autocuidado.'
        }
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
    
    // Función para mostrar detalles de una insignia
    function showBadgeDetail(badgeType) {
        const badge = badgesData[badgeType];
        
        if (badge) {
            // Actualizar contenido del modal
            badgeDetailTitle.textContent = badge.title;
            badgeDetailDescription.textContent = badge.description;
            badgeDetailIcon.innerHTML = badge.icon;
            badgeUnlocksText.textContent = badge.unlocks;
            
            // Limpiar y actualizar lista de requisitos
            badgeRequirementsList.innerHTML = '';
            badge.requirements.forEach(req => {
                const li = document.createElement('li');
                li.textContent = req;
                badgeRequirementsList.appendChild(li);
            });
            
            // Mostrar el modal
            badgeDetail.classList.add('active');
            
            // Registrar interacción
            console.log(`Insignia seleccionada: ${badgeType}`);
            
            // Efecto de sonido (simulado para el prototipo)
            console.log('Reproduciendo efecto de sonido: badge-unlock.mp3');
        }
    }
    
    // Función para cerrar el modal de detalles de insignia
    function closeBadgeDetail() {
        badgeDetail.classList.remove('active');
    }
    
    // Asignar eventos a los botones de neurodivergencia
    neurodivergenceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.type;
            changeNeurodivergenceType(type);
        });
    });
    
    // Asignar eventos a las insignias
    badgeItems.forEach(badge => {
        badge.addEventListener('click', function() {
            const badgeType = this.dataset.badge;
            showBadgeDetail(badgeType);
        });
    });
    
    // Asignar evento al botón de cerrar del modal de insignias
    if (closeBadge) {
        closeBadge.addEventListener('click', closeBadgeDetail);
    }
    
    // Cerrar el modal de insignias al hacer clic fuera del contenido
    badgeDetail.addEventListener('click', function(e) {
        if (e.target === badgeDetail) {
            closeBadgeDetail();
        }
    });
    
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
    
    // Animación para elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-item, .step, .stat-item, .badge-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = element.classList.contains('badge-item') 
                    ? 'translateY(0) rotate(' + (Math.random() * 10 - 5) + 'deg)'
                    : 'translateY(0)';
            }
        });
    };
    
    // Inicializar estilos para animación
    document.querySelectorAll('.feature-item, .step, .stat-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    document.querySelectorAll('.badge-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px) rotate(' + (Math.random() * 10 - 5) + 'deg)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar
    
    // Inicializar con TDAH seleccionado por defecto
    changeNeurodivergenceType('tdah');
    
    // Añadir elementos de taller dinámicos
    function createWorkshopElements() {
        // Crear notas adhesivas aleatorias
        for (let i = 0; i < 3; i++) {
            const note = document.createElement('div');
            note.className = 'sticky-note';
            
            // Posición aleatoria (asegurándose de que no interfiera con el contenido principal)
            const isLeft = Math.random() > 0.5;
            note.style.top = Math.floor(Math.random() * 70 + 15) + 'vh';
            note.style[isLeft ? 'left' : 'right'] = Math.floor(Math.random() * 10 + 2) + 'vw';
            note.style.transform = `rotate(${Math.floor(Math.random() * 20 - 10)}deg)`;
            
            // Color aleatorio
            const colors = ['var(--sticky-yellow)', 'var(--sticky-blue)', 'var(--sticky-green)', 'var(--sticky-pink)', 'var(--sticky-orange)'];
            note.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Contenido aleatorio
            const contents = [
                'Idea brillante',
                'Próximo reto',
                'Recordatorio',
                '¡No olvidar!',
                'Importante',
                'Revisar esto'
            ];
            note.textContent = contents[Math.floor(Math.random() * contents.length)];
            
            document.querySelector('.workshop-elements').appendChild(note);
        }
    }
    
    // Llamar a la función para crear elementos de taller
    createWorkshopElements();
});

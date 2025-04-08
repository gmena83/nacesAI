// NACES.AI - JavaScript principal con funcionalidades modernas
// Implementa interactividad para el prototipo con estilo computacional

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const neurodivergenceButtons = document.querySelectorAll('.neurodivergence-btn');
    const exampleContainers = document.querySelectorAll('.example-container');
    const badgeItems = document.querySelectorAll('.badge-item');
    const badgeDetail = document.getElementById('badge-detail');
    const badgeDetailTitle = document.querySelector('.badge-detail-title');
    const badgeDetailDescription = document.querySelector('.badge-detail-description');
    const badgeRequirementsList = document.querySelector('.badge-requirements-list');
    const badgeUnlocksText = document.querySelector('.badge-unlocks-text');
    const badgeDetailIcon = document.querySelector('.badge-detail-icon');
    const closeBadge = document.querySelector('.close-badge');
    
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
        
        // Actualizar ejemplos
        exampleContainers.forEach(container => {
            if (container.id === `${type}-example`) {
                container.classList.add('active');
            } else {
                container.classList.remove('active');
            }
        });
        
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
                    ? 'translateY(0)'
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
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar
    
    // Inicializar con TDAH seleccionado por defecto
    changeNeurodivergenceType('tdah');
    
    // Añadir elementos de código dinámicos
    function createCodeElements() {
        // Crear líneas de código aleatorias
        const codeLines = [
            'function adaptContent(neurodivergenceType) { }',
            'const learningPath = new AIAdaptiveSystem();',
            'if (attention < threshold) { addInteractivity(); }',
            'class NeurodivergentLearner extends Student { }',
            'const success = await personalizedLearning();'
        ];
        
        for (let i = 0; i < 3; i++) {
            const line = document.createElement('div');
            line.className = 'code-line';
            
            // Posición aleatoria (asegurándose de que no interfiera con el contenido principal)
            const isLeft = Math.random() > 0.5;
            line.style.top = Math.floor(Math.random() * 70 + 15) + 'vh';
            line.style[isLeft ? 'left' : 'right'] = Math.floor(Math.random() * 10 + 2) + 'vw';
            
            // Contenido aleatorio
            line.textContent = codeLines[Math.floor(Math.random() * codeLines.length)];
            
            document.querySelector('.code-elements').appendChild(line);
        }
    }
    
    // Efecto de partículas para el hero
    function createParticles() {
        const particlesContainer = document.querySelector('.hero-particles');
        if (!particlesContainer) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = Math.random() * 5 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'var(--primary)';
            particle.style.borderRadius = '50%';
            particle.style.position = 'absolute';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.opacity = Math.random() * 0.5;
            particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Llamar a las funciones para crear elementos dinámicos
    createCodeElements();
    createParticles();
    
    // Añadir estilos para animación de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(0) translateX(20px); }
            75% { transform: translateY(20px) translateX(10px); }
            100% { transform: translateY(0) translateX(0); }
        }
    `;
    document.head.appendChild(style);
});

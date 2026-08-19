/* js/animations.js */
export function initAnimations() {
    // Accesibilidad: Verificar si el usuario tiene desactivadas las animaciones en su sistema operativo
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Elementos con clase .fade-in (compatibilidad) o atributo data-animation (variantes)
    const revealables = document.querySelectorAll('.fade-in, [data-animation]');

    if (prefersReducedMotion) {
        // Mostrar todo el contenido de inmediato (sin animaciones)
        revealables.forEach(element => element.classList.add('is-visible'));
        return;
    }

    // Configuración del Observer
    const observerOptions = {
        root: null,           // Usa el viewport (pantalla)
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12       // Se activa cuando el 12% del elemento es visible
    };

    // Crear el Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Respetar el retraso opcional definido en HTML: data-delay="300"
                if (element.dataset.delay) {
                    element.style.transitionDelay = `${element.dataset.delay}ms`;

                    // Eliminar el retraso tras la aparición para no entorpecer los hovers posteriores
                    window.setTimeout(() => {
                        element.style.transitionDelay = '';
                    }, Number(element.dataset.delay) + 900);
                }

                // Agregar clase para disparar la animación CSS
                element.classList.add('is-visible');

                // Dejar de observar el elemento (solo se anima una vez)
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observar cada elemento
    revealables.forEach(element => {
        observer.observe(element);
    });

    // ---- Contadores animados de KPIs (hero) ----
    const counters = document.querySelectorAll('[data-count]');

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = Number(element.dataset.count);
                const prefix = element.dataset.prefix || '';
                const suffix = element.dataset.suffix || '';
                const duration = 1400;
                const startTime = performance.now();

                function updateCounter(now) {
                    const progress = Math.min((now - startTime) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
                    const current = Math.round(target * eased);
                    element.textContent = prefix + current.toLocaleString('en-US') + suffix;
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }

                requestAnimationFrame(updateCounter);
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(counter => counterObserver.observe(counter));

    // ---- Barra de progreso de scroll ----
    const progressBar = document.getElementById('scroll-progress');

    if (progressBar) {
        function updateScrollProgress() {
            const scrollTop = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
            progressBar.style.width = `${percent}%`;
        }

        updateScrollProgress();
        window.addEventListener('scroll', updateScrollProgress, { passive: true });
    }
}
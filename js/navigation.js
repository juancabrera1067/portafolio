/* js/navigation.js */
export function initNavigation() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- 1. Sticky Navbar: sombra al hacer scroll ---
    const handleScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Ejecutar una vez al cargar por si el usuario recarga a mitad de la página
    handleScroll();

    // --- 2. Menú Móvil (Abrir/Cerrar) ---
    const closeMenu = () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Abrir menú de navegación');
        document.body.style.overflow = '';
    };

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';

            mainNav.classList.toggle('active', !isExpanded);
            mobileMenuBtn.setAttribute('aria-expanded', String(!isExpanded));
            mobileMenuBtn.setAttribute('aria-label', isExpanded ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
            // Bloquear el scroll del body cuando el menú está abierto
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });

        // Cerrar el menú con la tecla Escape (accesibilidad)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // --- 3. Scroll Suave compensando la altura del header fijo ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href.startsWith('#')) return;

            e.preventDefault();
            const targetSection = document.getElementById(href.substring(1));
            if (!targetSection) return;

            if (mainNav && mainNav.classList.contains('active')) closeMenu();

            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // --- 4. Scrollspy: resaltar la sección visible en el menú ---
    const sectionLinks = document.querySelectorAll('.nav-link:not(.btn)');
    const sections = [...sectionLinks]
        .map(link => document.getElementById(link.getAttribute('href').substring(1)))
        .filter(Boolean);

    const setActiveLink = (id) => {
        sectionLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    // Detectar la sección que cruza el centro de la pantalla
    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(section => spyObserver.observe(section));
}
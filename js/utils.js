/* js/utils.js */

// Cambio de tema claro/oscuro: recuerda la elección del usuario (localStorage)
// y respeta la preferencia del sistema operativo la primera vez
export function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    const stored = localStorage.getItem('theme');

    const applyTheme = (dark) => {
        root.setAttribute('data-theme', dark ? 'dark' : 'light');
        toggle.setAttribute('aria-pressed', String(dark));
        toggle.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');

        // Sincronizar el color de la barra del navegador (meta theme-color)
        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) {
            themeColor.setAttribute('content', dark ? '#1B1533' : '#36255C');
        }
    };

    // Aplicar la elección guardada, o la preferencia del sistema si es la primera visita
    applyTheme(stored ? stored === 'dark' : systemDark.matches);

    // Si el usuario cambia el tema del sistema (sin elección propia guardada), seguirlo
    systemDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) applyTheme(e.matches);
    });

    toggle.addEventListener('click', () => {
        const nextDark = root.getAttribute('data-theme') !== 'dark';
        localStorage.setItem('theme', nextDark ? 'dark' : 'light');

        // Transición suave de colores durante el cambio
        root.classList.add('theme-transition');
        window.setTimeout(() => root.classList.remove('theme-transition'), 350);

        applyTheme(nextDark);
    });
}

// Botón "Volver arriba": aparece al hacer scroll y sube suavemente
export function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    const onScroll = () => {
        btn.classList.toggle('visible', window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Actualiza el año del copyright automáticamente
export function initFooterYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
export function initNavigation() {
    const header = document.getElementById('header');
    const button = document.querySelector('.mobile-menu-toggle');
    const nav = document.getElementById('main-nav');
    if (!button || !nav) return;
    document.documentElement.classList.add('js');
    const mobile = window.matchMedia(document.querySelector('.hero-preview') ? '(max-width: 767px)' : '(max-width: 991px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const floatButtons = document.querySelectorAll('.float-whatsapp, .back-to-top');
    let opened = false;
    const setOpen = (value, restore = true) => {
        opened = value && mobile.matches;
        nav.classList.toggle('active', opened);
        nav.inert = mobile.matches && !opened;
        button.setAttribute('aria-expanded', String(opened));
        button.setAttribute('aria-label', opened ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        document.body.style.overflow = opened ? 'hidden' : '';
        [main, footer, ...floatButtons].forEach(el => { if (el) el.inert = opened; });
        if (opened) nav.querySelector('a')?.focus();
        else if (restore) button.focus();
    };
    button.addEventListener('click', () => setOpen(!opened));
    mobile.addEventListener('change', () => setOpen(false, false));
    setOpen(false, false);
    document.addEventListener('keydown', event => {
        if (!opened) return;
        if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
        if (event.key === 'Tab') {
            const focusables = [button, ...nav.querySelectorAll('a[href]')];
            const index = focusables.indexOf(document.activeElement);
            if (event.shiftKey && index <= 0) { event.preventDefault(); focusables.at(-1).focus(); }
            else if (!event.shiftKey && index === focusables.length - 1) { event.preventDefault(); button.focus(); }
        }
    });
    nav.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
        const target = document.getElementById(link.hash.slice(1));
        if (!target) return;
        event.preventDefault();
        setOpen(false, false);
        target.scrollIntoView({ behavior: reduced.matches ? 'instant' : 'smooth' });
        history.replaceState(null, '', link.hash);
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
    }));
    if ('IntersectionObserver' in window) {
        const links = [...nav.querySelectorAll('a[href^="#"]')];
        const spy = new IntersectionObserver(entries => {
            const active = entries.find(entry => entry.isIntersecting);
            if (!active) return;
            links.forEach(link => {
                const selected = link.hash === `#${active.target.id}`;
                link.classList.toggle('active', selected);
                if (selected) link.setAttribute('aria-current', 'location');
                else link.removeAttribute('aria-current');
            });
        }, { rootMargin: '-20% 0px -60% 0px' });
        links.forEach(link => { const section = document.querySelector(link.hash); if (section) spy.observe(section); });
    }
}

export function initAnimations() {
    const featured = document.querySelector('[data-featured-reveal]');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!featured || typeof featured.animate !== 'function' || motion.matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        const animation = featured.animate([{ transform: 'translateY(12px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 400, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
        const cancelOnReduce = () => { if (motion.matches) animation.cancel(); };
        motion.addEventListener('change', cancelOnReduce);
        animation.finished.catch(() => {}).finally(() => motion.removeEventListener('change', cancelOnReduce));
        observer.disconnect();
    }, { threshold: 0.15 });
    observer.observe(featured);
}

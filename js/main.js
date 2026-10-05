/* js/main.js */
import { initNavigation } from './navigation.js?v=20261005-published';
import { initAnimations } from './animations.js?v=20261005-published';
import { initProjects } from './projects.js?v=20261005-published';
import { initContactForm } from './contact.js?v=20261005-published';
import { initBackToTop, initFooterYear, initThemeToggle } from './utils.js?v=20261005-published';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();
    initProjects();
    initContactForm();
    initBackToTop();
    initFooterYear();
    initThemeToggle();
});
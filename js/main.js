/* js/main.js */
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initProjects } from './projects.js';
import { initContactForm } from './contact.js';
import { initBackToTop, initFooterYear, initThemeToggle } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();
    initProjects();
    initContactForm();
    initBackToTop();
    initFooterYear();
    initThemeToggle();
});
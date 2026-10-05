/* js/contact.js */

// Endpoint de envío — FormSubmit (gratis, sin backend). Si falla, usa el fallback por correo
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/juandedioscabrerasanchez@gmail.com';

const NICHE_TO_TYPE = {
    'tienda': 'web',
    'restaurante': 'web',
    'gimnasio': 'web',
    'distribuidor': 'web'
};

export function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusContainer = document.getElementById('form-status');
    const submitBtn = form ? form.querySelector('button[type="submit"]') : null;

    if (!form) return;

    // Expresión regular para validar formato de correo electrónico
    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // Función para mostrar mensajes de estado
    const showStatus = (message, type, persistent = false) => {
        statusContainer.textContent = message;
        statusContainer.className = `form-status ${type}`; // type puede ser 'success' o 'error'

        // Limpiar el mensaje después de unos segundos (salvo los persistentes)
        if (!persistent) {
            setTimeout(() => {
                statusContainer.textContent = '';
                statusContainer.className = 'form-status';
            }, type === 'error' ? 8000 : 9000);
        }
    };

    // Fallback: abre el correo del usuario con el mensaje prellenado (funciona en cualquier hosting)
    const mailtoFallback = (activationRequired = false) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const projectType = document.getElementById('project-type').value;
        const budget = document.getElementById('budget').value;
        const message = document.getElementById('message').value.trim();

        const subject = encodeURIComponent(`Solicitud de proyecto: ${projectType}`);
        const body = encodeURIComponent(
            `Hola Juan,\n\nMi nombre es ${name}.\n\n${message}\n\nPresupuesto estimado: ${budget}\nMi correo: ${email}\n`
        );

        window.location.href = `mailto:juandedioscabrerasanchez@gmail.com?subject=${subject}&body=${body}`;
        showStatus(activationRequired
            ? 'El formulario todavía no está disponible. Abrimos tu correo con el mensaje preparado; debes enviarlo desde allí. También puedes contactarme por WhatsApp.'
            : 'No pudimos enviar desde el formulario. Abrimos tu correo con el mensaje preparado; debes enviarlo desde allí. Tus datos siguen en el formulario.', 'error', true);
    };

    // Envío con fetch a FormSubmit (sin backend propio); si falla, usa el respaldo por correo
    const submitForm = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Obtener valores de los campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const projectType = document.getElementById('project-type').value;
        const budget = document.getElementById('budget').value;
        const message = document.getElementById('message').value.trim();

        // 1. Validación Básica Frontend
        if (!name || !email || !projectType || !message) {
            showStatus('Por favor, completa todos los campos requeridos.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showStatus('Por favor, ingresa un correo electrónico válido.', 'error');
            return;
        }

        // 1b. Consentimiento de datos personales (LFPDPPP)
        const privacyConsent = document.getElementById('privacy-consent');
        if (privacyConsent && !privacyConsent.checked) {
            showStatus('Debes aceptar el aviso de privacidad para continuar.', 'error');
            return;
        }

        // 2. Estado de Carga (UX)
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        const formData = new FormData(form);
        formData.append('_subject', 'Solicitud de proyecto desde el portafolio');
        formData.append('_template', 'table');
        formData.append('_captcha', 'false');

        fetch(FORM_ENDPOINT, { method: 'POST', body: formData })
            .then(async (res) => {
                let data;
                try { data = await res.json(); } catch { data = {}; }
                if (res.ok && /needs?\s+activation/i.test(data.message || '')) return { activationRequired: true };
                if (res.ok && (data.success === true || data.success === 'true')) return data;
                throw new Error(data.message || 'Error en el servidor');
            })
            .then((data) => {
                if (data.activationRequired) {
                    mailtoFallback(true);
                    return;
                }
                showStatus('Tu solicitud fue aceptada para envío. Gracias por escribir; me pondré en contacto contigo.', 'success');
                form.reset();
            })
            .catch(() => {
                // Sin PHP disponible: respaldo por correo, el mensaje nunca se pierde
                mailtoFallback();
            })
            .finally(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            });
    };

    form.addEventListener('submit', submitForm);
    document.querySelectorAll('[data-project-type]').forEach(link => link.addEventListener('click', () => {
        document.getElementById('project-type').value = link.dataset.projectType;
    }));

    // ---- Botones "por nicho": prellenan el tipo de proyecto y llevan al formulario ----
    const nicheBtns = document.querySelectorAll('[data-niche]');

    nicheBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const niche = btn.getAttribute('data-niche');
            const projectSelect = document.getElementById('project-type');

            projectSelect.value = NICHE_TO_TYPE[niche] || 'custom';

            document.getElementById('contacto').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });

            window.setTimeout(() => {
                const nameField = document.getElementById('name');
                if (nameField) nameField.focus({ preventScroll: true });
            }, 600);
        });
    });
}
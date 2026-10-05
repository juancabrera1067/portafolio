/* js/projects.js */

// Base de datos de proyectos (En el futuro, esto podría venir de una API o CMS)
const projectsData = {
    "pos": {
        title: "Sistema de Punto de Venta Integral",
        problem: "El proyecto reúne ventas, inventario y caja en una herramienta para la operación del negocio.",
        solution: "Se desarrolló un sistema POS de escritorio centralizado. Permite escaneo de códigos de barra, gestión de roles (cajero/administrador) y sincronización de inventario en tiempo real.",
        features: [
            "Módulo de ventas ágil con soporte para lectores de códigos de barras.",
            "Control de inventarios y alertas de stock mínimo.",
            "Cortes de caja automatizados.",
            "Reportes gráficos de ventas semanales y mensuales."
        ],
        tech: ["C#", "SQL Server", ".NET", "Windows Forms"],
        result: ""
    },
    "web-gym": {
        title: "Sistema de recepción y administración para gimnasio",
        problem: "El gimnasio necesita una herramienta interna para el trabajo del recepcionista y la administración.",
        solution: "Panel de gestión utilizado en la recepción del gimnasio. Es un sistema interno, no una página web pública.",
        features: ["Interfaz de recepción y administración.", "Vista de clientes, membresías y accesos mostrada en la captura del proyecto."],
        tech: ["Sistema administrativo"],
        result: ""
    },
    "db-migracion": {
        title: "Migración y Optimización de Base de Datos",
        problem: "Proyecto de consolidación y organización de información histórica en una base de datos relacional.",
        solution: "Migración consolidada de todos los datos a SQL Server con esquema normalizado, índices optimizados y vistas para reportes gerenciales en tiempo real.",
        features: [
            "Migración íntegra de datos históricos sin pérdida de información.",
            "Esquema normalizado con integridad referencial.",
            "Índices y consultas optimizadas para reportes instantáneos.",
            "Backups automáticos y plan de recuperación ante desastres."
        ],
        tech: ["SQL Server", "SSMS", "Power BI"],
        result: ""
    },
    "app-facturacion": {
        title: "Aplicación de Escritorio para Facturación",
        problem: "Proyecto para gestionar clientes, productos y documentos de facturación desde una aplicación de escritorio.",
        solution: "Aplicación de escritorio de facturación electrónica con catálogo de productos, validación automática de montos y generación de documentos en PDF listos para enviar.",
        features: [
            "Catálogo de clientes y productos con búsqueda instantánea.",
            "Cálculo automático de impuestos, descuentos y totales.",
            "Generación de facturas en PDF con numeración correlativa.",
            "Historial consultable y filtrable por rango de fechas."
        ],
        tech: ["C#", ".NET", "SQL Server", "Windows Forms"],
        result: ""
    }
};

export function initProjects() {
    // --- 1. Lógica de Filtrado de Proyectos ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase activa de todos los botones y agregarla al clickeado
            filterBtns.forEach(b => {
                b.classList.toggle('active', b === btn);
                b.setAttribute('aria-pressed', String(b === btn));
            });

            const filterValue = btn.getAttribute('data-filter');

            // Filtrar las tarjetas (CSS class .is-hidden en vez de estilos inline)
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                card.classList.toggle('is-hidden', filterValue !== 'all' && !categories.includes(filterValue));
            });
        });
    });

    // --- 2. Lógica del Modal (Casos de Estudio) ---
    const modal = document.getElementById('project-modal');
    const openBtns = document.querySelectorAll('.open-modal-btn');
    const closeBtn = document.querySelector('.close-modal-btn');
    let modalTrigger;
    modal?.addEventListener('close', () => {
        document.body.style.overflow = '';
        modalTrigger?.focus();
    });

    // Elementos internos del modal a actualizar
    const modalTitle = document.getElementById('modal-title');
    const modalProblem = document.getElementById('modal-problem');
    const modalSolution = document.getElementById('modal-solution');
    const modalFeatures = document.getElementById('modal-features');
    const modalResult = document.getElementById('modal-result');
    const modalTech = document.getElementById('modal-tech');

    // Función para llenar el modal con datos
    const populateModal = (projectId) => {
        const data = projectsData[projectId];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalProblem.textContent = data.problem;
        modalSolution.textContent = data.solution;
        modalResult.textContent = data.result;

        // Limpiar y llenar funcionalidades (lista)
        modalFeatures.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });

        // Limpiar y llenar tags de tecnologías
        modalTech.innerHTML = '';
        data.tech.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'badge-tech';
            span.textContent = tech;
            modalTech.appendChild(span);
        });
    };

    // Abrir modal
    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-id');
            if (!projectId || !projectsData[projectId]) return;

            modalTrigger = btn;
            populateModal(projectId);
            modal.showModal(); // API Nativa de HTML5 para abrir dialogs
            document.body.style.overflow = 'hidden'; // Evita scroll de fondo
        });
    });

    // Cerrar modal con el botón X
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.close();
            document.body.style.overflow = '';
        });
    }

    // Cerrar modal al hacer clic fuera del contenido (en el backdrop)
    if (modal) {
        modal.addEventListener('click', (e) => {
            const dialogDimensions = modal.getBoundingClientRect();
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                modal.close();
                document.body.style.overflow = '';
            }
        });
    }
}

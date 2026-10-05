# CabTec — Portafolio de Juan de Dios Cabrera

Sitio estático en HTML, CSS y JavaScript modular para presentar trabajo web y recibir solicitudes de cotización. Sin frameworks ni proceso de build; la portada utiliza Manrope y acentos en DM Serif Display desde Google Fonts.

## Vista previa local

Desde la raíz del proyecto:

```powershell
python -m http.server 8080
```

Abre http://localhost:8080. El servidor local permite cargar los módulos JavaScript correctamente.

## Portada rediseñada

`index.html` carga `css/variables.css` y `css/studio.css`. Dirección de estudio moderno: violeta profundo, lavanda, superficies sólidas, títulos alineados a izquierda, precios en filas y WhatsApp como acción principal. La experiencia adicional en software aparece en un `details` nativo; las preguntas también usan `details`, y los detalles de proyectos usan `dialog`.

`DESIGN.md` registra los tokens implementados; `.impeccable/design.json` incluye componentes de muestra, movimiento y breakpoints. `PRODUCT.md` y `.impeccable/direction.md` documentan el propósito y la dirección aprobada.

La navegación móvil se activa hasta 767px. La revisión visual cubrió 1440, 768, 390 y 320px en ambos temas; las capturas y la matriz están en `.impeccable/review/`. El pie conserva fondo oscuro. El contenido, navegación, capturas y preguntas permanecen accesibles sin JavaScript; el formulario y los controles que requieren JavaScript se ocultan y se ofrecen WhatsApp y correo. Movimiento reducido elimina las entradas animadas.

`404.html` y `aviso-privacidad.html` conservan las hojas de estilo heredadas; el nuevo sistema de portada no se aplica a esas páginas.

## Proyectos y procedencia

- **Flor de Café:** cafetería de Guasave, en desarrollo y sin publicar. `assets/projects/flor-de-cafe.jpg` es una captura real de la portada obtenida del proyecto del usuario, sin modificar ese proyecto. Sus formularios no envían datos; la portada identifica los formularios y la publicación como pendientes. No se atribuyen resultados ni se presenta como una entrega terminada.
- **Gimnasio:** sistema interno de recepción y administración, no una web pública. Se conservan sus capturas junto a POS, base de datos y facturación como experiencia adicional.
- Se conservan el logo y la fotografía real de Juan. No se añaden testimonios ni cifras sin evidencia.

## Contacto, precios y formulario

Contactos conservados: WhatsApp `+52 687 139 3762`, `juandedioscabrerasanchez@gmail.com`, GitHub `juancabrera1067` y LinkedIn `juan-cabrera-sanchez-9a1a1b3a4`.

Precios de referencia conservados en MXN: página de presentación $3,000–$5,000; sitio web de negocio $6,000–$10,000; tienda en línea $11,000–$18,000. El alcance final se acuerda en una cotización.

El formulario de CabTec utiliza el endpoint AJAX existente de FormSubmit y respaldo mediante `mailto:`. **La recepción real de mensajes y la activación de FormSubmit no se verificaron** durante el rediseño. El respaldo abre el cliente de correo con el texto preparado; el visitante debe enviarlo. No se enviaron consultas de prueba a terceros.

## Publicación

Este trabajo prepara una vista previa local. No se publicó el rediseño ni el proyecto Flor de Café. Los metadatos y archivos de hosting existentes se conservan.

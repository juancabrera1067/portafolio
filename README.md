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

El formulario de CabTec utiliza el endpoint AJAX existente de FormSubmit y respaldo mediante `mailto:`. **Prueba real del 5 de octubre de 2026:** FormSubmit respondió que necesita activación e indicó que envió un correo con el enlace “Activate Form”. Un enlace de activación anterior mostró “Confirmation token not found”. Después se realizó una prueba desde el sitio público con el texto “PRUEBA CABTEC PUBLICADO 2026-10-05”: FormSubmit aceptó la solicitud y el propietario confirmó su recepción en la bandeja de entrada. **Envío y recepción comprobados.** El respaldo abre el cliente de correo con el texto preparado; el visitante debe enviarlo. Se realizó un envío de prueba identificado como técnico con datos ficticios. La respuesta de activación ya no borra los datos ni se presenta como entrega exitosa; ofrece respaldo por correo y WhatsApp.

## Publicación

GitHub Pages está configurado para publicar desde `main`, carpeta raíz, en https://juancabrera1067.github.io/portafolio/. El proyecto Flor de Café continúa sin publicarse y no se modifica como parte de este repositorio.

## Estado de pendientes — 5 de octubre de 2026

- [x] Logo optimizado, fotografía real y capturas de proyectos disponibles.
- [x] Correo, WhatsApp y enlace de LinkedIn configurados. La configuración del enlace no acredita acceso al perfil o propiedad de la cuenta.
- [x] Canonical, Open Graph, robots y sitemap apuntan al sitio de GitHub Pages.
- [x] Imagen social renovada a 1200 × 630, con oferta de páginas web en Tijuana y paleta actual. URL versionada para solicitar la imagen nueva al compartir.
- [x] Fecha de modificación de la portada en sitemap actualizada; la fecha del aviso se conserva porque no cambió su contenido.
- [x] JSON-LD válido y ubicación de LocalBusiness en Tijuana, Baja California.
- [x] Favicons de 16, 32 y 180 px, página 404 y aviso de privacidad presentes; enlaces locales sin archivos faltantes.
- [x] Envío real de prueba del formulario realizado; se detectó activación pendiente y se corrigió su tratamiento.
- [x] FormSubmit acepta solicitudes desde la URL pública y el propietario confirmó recepción de la prueba en bandeja de entrada. No es necesario reutilizar el enlace de activación anterior.
- [ ] Incorporar testimonios reales, con autorización para publicarlos. No se muestran testimonios mientras no exista esa evidencia.

- [x] Rediseño publicado en GitHub Pages desde `main`; build y despliegue del rediseño finalizados correctamente.

Los módulos JavaScript y hojas de estilo de la portada usan una versión en su URL para evitar mezclar archivos antiguos al publicar. El formulario identifica la URL pública con `_url`, evitando referencias a localhost en correos. La recepción está acreditada por la confirmación del propietario, además de la respuesta del servicio. Se probaron también las respuestas de activación pendiente, éxito y rechazo; únicamente el éxito limpia el formulario.

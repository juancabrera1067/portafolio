---
name: CabTec
description: Estudio moderno para un portafolio web.
colors:
  primary: "#6D4FC7"
  primary-hover: "#5640A8"
  violet-deep: "#36255C"
  lavender: "#D2C3F4"
  bg-main: "#F0EBF6"
  bg-light: "#E8E1F1"
  text-heading: "#33255A"
  text-main: "#4A4269"
  text-light: "#F4F0FB"
  secondary: "#E7DEFB"
  border: "#E6DFF7"
  dark-bg-main: "#1B1533"
  dark-bg-light: "#241C45"
  dark-bg-dark: "#2A214F"
  dark-text-heading: "#EDE9FB"
  dark-text-main: "#C7BEE2"
  dark-primary: "#9B84E8"
  dark-primary-hover: "#B9A8EC"
  dark-secondary: "#33285C"
  dark-border: "#3B2F6B"
  inverse-body: "#DED5EE"
  error: "#A02D40"
  dark-error: "#FFB5C0"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3rem, 5.5vw, 5rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.2rem, 3.9vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-.035em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.7
rounded:
  sm: "4px"
  field: "6px"
  md: "8px"
  panel: "12px"
  lg: "16px"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
  xl: "4rem"
  2xl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-main}"
    rounded: "{rounded.md}"
    padding: "12px 21px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.bg-main}"
    textColor: "{colors.text-heading}"
    rounded: "{rounded.md}"
    padding: "12px 21px"
    height: "52px"
  input:
    backgroundColor: "{colors.bg-main}"
    textColor: "{colors.text-heading}"
    rounded: "{rounded.field}"
    padding: "12px"
  chip:
    backgroundColor: "{colors.bg-main}"
    textColor: "{colors.text-heading}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  card:
    backgroundColor: "{colors.bg-light}"
    rounded: "{rounded.panel}"
    padding: "24px"
---

# Design System: CabTec

## Overview

**Creative North Star: "Estudio moderno"**

Estudio moderno, directo y cercano. Manrope, títulos alineados a izquierda, espacios amplios y superficies sólidas dan protagonismo al trabajo y al contacto. La captura de cada proyecto conserva su identidad propia dentro del marco de CabTec.

**Key Characteristics:**
- Jerarquía tipográfica clara y composición abierta.
- Violeta, lavanda y superficies sólidas en ambos temas.
- Movimiento breve, puntual y compatible con movimiento reducido.

## Colors

### Primary
Violeta de acción (`primary`) para botones; violeta profundo (`violet-deep`) para superficies de proyecto y pie. El botón principal conserva su violeta y texto blanco en ambos temas.

### Secondary
Lavanda (`lavender`) como acento; lavanda suave (`secondary`) para marcos, etiquetas y pasos.

### Neutral
`bg-main`, `bg-light`, `text-heading`, `text-main` y `border` separan superficies y jerarquías. Los tokens `dark-*` corresponden a las sustituciones de tema de `variables.css`; `text-light` e `inverse-body` sirven sobre superficies oscuras. `error` y `dark-error` son estados del formulario.

## Typography

Manrope para todas las funciones en la portada; fallback sans-serif. Display y headline se escalan según viewport; title, body y label siguen el frontmatter. Párrafos limitados a 70ch. En móvil, display cambia a `clamp(2.5rem, 8vw, 3.5rem)` y campos a 16px.

## Layout

Contenedor máximo de 1240px con 112px de descuento horizontal. A 1100px pasa a 64px; a 767px, 40px. Secciones de 100px verticales, 72px hasta 900px y 60px hasta 767px. Portada de dos columnas en escritorio, apilada hasta 900px. El menú móvil se activa hasta 767px; precios, servicios y formulario se apilan allí. Los pasos conservan dos columnas en móvil. Cabecera sticky de 88px, 72px en móvil con JavaScript. Matriz de revisión observada: 1440, 768, 390 y 320px, en claro y oscuro; evidencias en `.impeccable/review/`.

## Elevation & Depth

Superficies planas, cambios de tono y bordes finos; la portada no aplica las sombras heredadas de `variables.css`. El pie conserva una superficie oscura en ambos temas. El dialog usa un backdrop oscuro translúcido. Entradas de portada de 500ms y aparición única del proyecto de 400ms; desplazamiento de 12px. Movimiento reducido elimina esas entradas y cambia el menú a opacidad.

## Shapes

Esquinas suaves: botones y chips en `md`, campos en `field`, paneles y tarjetas en `panel`, marco de portada y dialog en `lg`. Los controles flotantes y de tema son circulares. Bordes de 1px para separar contenido, sin sombras decorativas.

## Components

- **Buttons:** principal violeta fijo con blanco; secundario con superficie del tema y borde. Hover principal oscurece; pulsación escala a .97. Foco global de 3px con offset de 5px.
- **Chips:** borde fino y altura mínima de 44px; filtros activos usan el acento del tema.
- **Cards:** panel tonal, padding de 24px; imágenes contenidas en software y portada recortada en su marco lavanda.
- **Inputs:** fondo del tema, borde fino, radios suaves y etiquetas visibles. Estados comunicados en región `aria-live`.
- **Navigation:** enlaces de 14px y peso 600; activo subrayado. Menú móvil con enlaces de 23px y transición de 240ms; sin JavaScript queda visible y se distribuye en varias líneas.
- **Disclosure / dialog:** preguntas y experiencia adicional con `details` nativo; detalles de software en `dialog`. Sin JavaScript quedan visibles contenido y capturas; se ocultan botones de modal, tema y formulario, con alternativas de WhatsApp y correo.
- **Pricing rows:** filas separadas por borde, cifras tabulares y cotización junto al precio; se apilan en móvil.

## Do's and Don'ts

### Do:
- Do conservar la paleta aprobada y Manrope en la portada.
- Do mantener foco visible, contenido sin JavaScript y ambos temas.
- Do identificar Flor de Café como en desarrollo y sin publicar.

### Don't:
- Don't añadir efectos infinitos, paralaje, símbolos flotantes, brillos ni degradados de texto.
- Don't presentar el sistema de gimnasio como una web pública.
- Don't inventar resultados, testimonios o estados de entrega.

## Detalle comercial

La portada incluye una lista breve de capacidades. El caso Flor de Café incorpora contexto del propósito, decisiones visuales y estado actual. Servicios y precios contienen listas de alcance orientativo, sin modificar los rangos ni fijar funcionalidades nuevas como incluidas. Giros de negocio y condiciones se amplían con details nativo. El proceso, la presentación personal y la guía de contacto aportan contexto; las preguntas frecuentes se reflejan también en JSON-LD. Estos elementos reutilizan los tokens existentes y se apilan en móvil.

## Contraste tipográfico

Manrope mantiene la lectura y los controles. DM Serif Display aporta el acento editorial: cursiva en las frases destacadas de portada y contacto, y redonda en Flor de Café. Los titulares crecen hasta 80 px, las secciones hasta 57.6 px y los precios hasta 32 px. La escala se reduce en celular; cuerpo de 16 px y colores existentes conservados. Ambas fuentes tienen alternativas locales y se cargan con display=swap.

## Superficies suaves y ritmo compacto

El tema claro usa lavanda grisácea #F0EBF6 como fondo y #E8E1F1 en superficies alternas. Se elimina el blanco puro de las superficies. Separación vertical de secciones: 64 px en computadora, 52 px en tablet y 40 px en celular. Portada, encabezados y grupos secundarios reducen sus márgenes; formularios y controles mantienen su espacio de interacción.

# CabTec — Portafolio Profesional de Juan de Dios Cabrera

Landing page + portafolio profesional para captar clientes como desarrollador de software freelance.
HTML5 + CSS3 + JavaScript modular, sin frameworks ni dependencias externas (solo Google Fonts).

## Estructura

```
├── index.html
├── 404.html          página de error personalizada (glitch + terminal animada)
├── aviso-privacidad.html
├── css/          reset, variables, global, componentes y una hoja por sección
├── js/           main, navigation, animations, projects, contact, utils
├── assets/       images, icons y projects (capturas de proyectos)
├── favicon/      favicon.svg + PNGs (16, 32, 180)
├── robots.txt
└── sitemap.xml
```

## Cómo ejecutar

Abre `index.html` directamente en el navegador, o mejor con un servidor local:

```bash
# Con Python
python -m http.server 8080

# Con Node (si tienes npx)
npx serve .
```

## Pendientes

- [x] **Optimizar el logo**: `assets/images/logo-cabtec.png` redimensionado y comprimido a ~44 KB.
- [x] **Dominio**: `index.html` (canonical, Open Graph, JSON-LD), `robots.txt` y `sitemap.xml` apuntan a `https://juancabrera1067.github.io/portafolio/`. Generada `assets/images/og-image.jpg` (1200x630).
- [x] **Perfil de LinkedIn**: `https://www.linkedin.com/in/juan-cabrera-sanchez-9a1a1b3a4/`.
- [x] **Correo**: `juandedioscabrerasanchez@gmail.com` correcto en todo el sitio.
- [x] **Fotografía profesional**: `assets/images/juan-cabrera.jpg` (tu foto real; antes estaba mal nombrada como `placeholder-perfil.svg`).
- [x] **Capturas reales**: `assets/projects/` usa `pos.jpg`, `web-gym.jpg`, `db-migracion.jpg` y `app-facturacion.jpg`.
- [x] **Formulario de contacto**: conectado a [FormSubmit](https://formsubmit.co) (AJAX + fallback por correo). Nota: la primera vez que un visitante envíe un mensaje debes activar la cuenta con el correo de confirmación de FormSubmit.
- [ ] **Testimonios**: la sección está oculta (`hidden`) hasta tener testimonios reales.
- [x] **JSON-LD LocalBusiness**: localizado en Culiacán, Sinaloa, MX.
- [x] **404 personalizado**: `404.html` con glitch y terminal animada.
- [x] **Favicons**: `apple-touch-icon.png` (180), `favicon-32x32.png` y `favicon-16x16.png`.
- [x] **Aviso de privacidad**: enlazado en el footer y en el formulario; incluido en `sitemap.xml`.

## Deploy

El sitio es 100% estático. Opciones recomendadas:

**GitHub Pages:**

1. Sube el repositorio a GitHub (`git remote add origin https://github.com/tu-usuario/tu-repo.git`)
2. En el repo: Settings → Pages → Source: "Deploy from a branch" → rama `main`, carpeta `/ (root)`.
3. Listo: disponible en `https://tu-usuario.github.io/tu-repo/`

**Netlify (con dominio propio):**

1. Arrastra la carpeta a https://app.netlify.com/drop → listo.
2. O conecta el repositorio de GitHub y activa deploy automático.

## Tecnologías

| Frontend | Backend futuro |
|---|---|
| HTML5, CSS3, JavaScript (ES Modules) | PHP / Node.js, API REST |
| Google Fonts: Inter + JetBrains Mono | FormSubmit / endpoint propio |
| 0 dependencias de build | CMS / panel administrativo |
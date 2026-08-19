# CabTec — Portafolio Profesional de Juan de Dios Cabrera

Landing page + portafolio profesional para captar clientes como desarrollador de software freelance.
HTML5 + CSS3 + JavaScript modular, sin frameworks ni dependencias externas (solo Google Fonts).

c## Estructura

```
├── index.html
├── css/          reset, variables, global, componentes y una hoja por sección
├── js/           main, navigation, animations, projects, contact, utils
├── assets/       images, icons y projects (capturas de proyectos)
├── favicon/
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
- [x] **Reemplazar el dominio**: `index.html` (canonical, Open Graph, JSON-LD), `robots.txt` y `sitemap.xml` apuntan a `https://juancabrera1067.github.io/portafolio/`. Generada `assets/images/og-image.jpg` (1200x630).
- [ ] **Verificar tu perfil de LinkedIn**: se usa `https://www.linkedin.com/in/juan-cabrera-sanchez`; ajustarla a tu URL real.
- [x] **Verificar el correo**: `juandedioscabrerasanchez@gmail.com` correcto en todo el sitio.
- [ ] **Fotografía profesional**: reemplazar `assets/images/placeholder-perfil.svg` por tu foto (`assets/images/juan-cabrera.jpg`).
- [x] **Capturas reales**: `assets/projects/` usa `pos.jpg`, `web-gym.jpg`, `db-migracion.jpg` y `app-facturacion.jpg`.
- [x] **Formulario de contacto**: conectado a [FormSubmit](https://formsubmit.co) (AJAX + fallback por correo). Nota: la primera vez que un visitante envíe un mensaje debes activar la cuenta con el correo de confirmación de FormSubmit.
- [ ] **Testimonios**: la sección está oculta (`hidden`) hasta tener testimonios reales.

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
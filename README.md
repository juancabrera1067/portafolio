# CabTec — Portafolio Profesional de Juan de Dios Cabrera

Landing page + portafolio profesional para captar clientes como desarrollador de software freelance.
HTML5 + CSS3 + JavaScript modular, sin frameworks ni dependencias externas (solo Google Fonts).

## Estructura

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

## Pendientes antes de publicar

- [ ] **Optimizar el logo**: `assets/images/logo-cabtec.png` pesa ~6 MB. Compresionarlo (tinypng.com o exportarlo como PNG-8/WebP) a menos de 200 KB.
- [ ] **Reemplazar el dominio** `https://www.tu-dominio.com` en `index.html` (canonical, Open Graph, JSON-LD), `robots.txt` y `sitemap.xml`.
- [ ] **Verificar tu perfil de LinkedIn**: se usa la URL `https://www.linkedin.com/in/juan-cabrera-sanchez`; ajustarla a tu URL real.
- [ ] **Verificar el correo**: se usa `juandedioscabrerasanchez@gmail.com` (corregí el typo "gamil.com").
- [ ] **Fotografía profesional**: reemplazar `assets/images/placeholder-perfil.svg` por `assets/images/juan-cabrera.jpg`.
- [ ] **Capturas reales**: reemplazar los SVG de `assets/projects/` por capturas reales de los proyectos.
- [ ] **Formulario de contacto**: la entrega actual simula el envío. Conectar a un servicio real:
  - [FormSubmit](https://formsubmit.co) (gratis, sin backend): cambiar el `action` del formulario.
  - o un endpoint propio (PHP / Node).
- [ ] **Testimonios**: la sección está preparada con placeholders; agregar testimonios reales cuando existan.

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
# Tomin-ki — Landing de Acceso Anticipado

Landing page de una sola página para captar usuarios fundadores del **Programa de Acceso Anticipado (PAA)** de **Tomin-ki**, app de finanzas personales para México.

![Tomin-ki](assets/logo-tominki.svg)

---

## Demo local

No requiere instalación ni build. Solo un servidor de archivos estáticos.

**Windows:** doble clic en `scripts/serve-tunnel.bat`
**macOS/Linux:** `./scripts/serve-tunnel.sh`
**Manual (desde la raíz):**
```bash
python -m http.server 8080
# abrir http://localhost:8080
```

Para compartir la página con un enlace público temporal, los scripts `serve-tunnel.*` levantan también un **Cloudflare Quick Tunnel** (`https://XXXX.trycloudflare.com`). Necesitan Python y `cloudflared` instalados.

---

## Tecnología

- **HTML + CSS + JavaScript puro**: `index.html` + `css/styles.css` + `js/main.js`. Sin frameworks, sin npm, sin paso de compilación.
- Tipografías **Red Hat Display** y **Red Hat Mono** (Google Fonts).
- 100% responsive y con buenas prácticas de accesibilidad (foco visible, `prefers-reduced-motion`, `aria-*`, skip link, contraste).

---

## Estructura

```
├── index.html        → marcado HTML
├── css/styles.css    → estilos
├── js/main.js        → lógica (nav, animaciones, FAQ, modal)
├── assets/
│   ├── img/          → logo, mascotas, capturas de producto
│   └── video/        → video del hero + poster
├── scripts/          → serve-tunnel.bat / .ps1 / .sh
├── Recuersos/        → fuentes originales (en .gitignore)
├── .gitignore
├── CLAUDE.md         → guía técnica para continuar el desarrollo
└── README.md         → este archivo
```

> Sitio 100% estático: desplegable tal cual en GitHub Pages, Netlify, Vercel o Cloudflare Pages (sin build).

## Secciones de la página

1. **Hero** — video de fondo + propuesta de valor + botón "Regístrate".
2. **Cintillo de confianza** — beneficios clave en una línea.
3. **El Problema** — tres dolores financieros + mascota.
4. **Plataforma** — 6 funciones principales.
5. **Producto** (réplica del prototipo) — multiplataforma, Espacios, Metas con IA, Control de tarjetas, Gastos compartidos, Préstamos.
6. **Acceso Anticipado (PAA)** — 5 bloques: qué es, beneficios, duración, desarrollo de nuevas funciones y qué sigue.
7. **Preguntas frecuentes (FAQ).**
8. **CTA final** + **modal de registro** (correo + términos + enviar).
9. **Footer** — contacto, legales, redes.

---

## Personalización rápida

- **Colores y fuentes:** variables CSS en el bloque `:root` de `index.html`.
- **Textos:** directamente en el HTML de `index.html`.
- **Imágenes/video:** reemplazar archivos dentro de `assets/` conservando el nombre.
- **Mascota:** `mascota-cuerpo.png`, `mascota-emocionado.png`, `mascota-triste.png`.

## Conectar el formulario (pendiente)

El registro (modal) hoy **no envía** los datos a ningún servicio: valida y muestra un mensaje de éxito, con un `// TODO` en el JavaScript. Para capturar correos de verdad, conectar el envío a **Mailchimp**, **Formspree** o una **API propia** en ese punto del código (`#paaFormEl` dentro de `index.html`).

---

## Crédito

Tomin-ki es un producto de **Tlahtocan Software**. Marca, paleta y tipografía según el *Manual de identidad Tomin-ki*.

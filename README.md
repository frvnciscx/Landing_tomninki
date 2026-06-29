# Tomin-ki — Landing de Acceso Anticipado

Landing page de una sola página para captar usuarios fundadores del **Programa de Acceso Anticipado (PAA)** de **Tomin-ki**, app de finanzas personales para México.

![Tomin-ki](assets/img/logo-tominki.svg)

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
├── css/styles.css    → estilos (tokens, secciones, responsive)
├── js/main.js        → lógica (nav scroll+aria, reveal, FAQ accesible, modal)
├── assets/
│   ├── img/          → logo, logo-pattern, mascotas (insignia/cuerpo/emocionado/triste), capturas de producto
│   └── video/        → archivos del hero anterior (hoy sin uso; pueden borrarse)
├── scripts/          → serve-tunnel.bat / .ps1 / .sh
├── Recuersos/        → fuentes originales (en .gitignore)
├── Manual de identidad Tomin-ki.pdf
├── .gitignore
├── CLAUDE.md         → guía técnica para continuar el desarrollo
└── README.md         → este archivo
```

> Sitio 100% estático: desplegable tal cual en GitHub Pages, Netlify, Vercel o Cloudflare Pages (sin build).

## Secciones de la página

1. **Hero** — fondo blanco con degradado crema, mensaje a la izquierda con H1 *"Tus finanzas, por fin claras."* (con palabras resaltadas en italic morado) + mockup de dashboard y app móvil a la derecha.
2. **Cintillo de confianza** — 4 beneficios clave en una línea (crema).
3. **El Problema** — tres dolores financieros + mascota triste.
4. **Plataforma** — 6 funciones principales (degradado blanco → bg-soft).
5. **Producto** (réplica del prototipo) — multiplataforma, Espacios, Metas con IA, Control de tarjetas, Gastos compartidos, Préstamos.
6. **Acceso Anticipado (PAA)** — 5 bloques: qué es (con mascota-insignia), beneficios, duración, desarrollo y qué sigue.
7. **CTA final** — card morado con patrón del logo y modal de registro (correo + términos + enviar).
8. **Preguntas frecuentes (FAQ)** — acordeón accesible (`aria-expanded` + `aria-controls`).
9. **Footer** — contacto, legales, redes (fondo crema, texto oscuro).

---

## Personalización rápida

- **Colores y fuentes:** variables CSS en el bloque `:root` de `css/styles.css`.
- **Textos:** directamente en el HTML de `index.html` (alineados a la voz del manual de marca).
- **Imágenes:** reemplazar archivos dentro de `assets/img/` conservando el nombre.
- **Mascota:** `mascota-insignia.png`, `mascota-cuerpo.png`, `mascota-emocionado.png`, `mascota-triste.png`.

## Conectar el formulario (pendiente)

El registro (modal) hoy **no envía** los datos a ningún servicio: valida y muestra un mensaje de éxito, con un `// TODO` en el JavaScript. Para capturar correos de verdad, conectar el envío a **Mailchimp**, **Formspree** o una **API propia** en ese punto del código (`#paaFormEl` dentro de `index.html`).

---

## Repositorio

Repo del proyecto: **https://github.com/frvnciscx/Landing_tomninki**

**Primera subida** (desde la raíz del proyecto):
```bash
git init
git add .
git commit -m "Landing PAA Tomin-ki: estructura inicial"
git branch -M main
git remote add origin https://github.com/frvnciscx/Landing_tomninki.git
git push -u origin main
```

**Clonar** (otra computadora / equipo de desarrollo):
```bash
git clone https://github.com/frvnciscx/Landing_tomninki.git
```

**Flujo de cambios:**
```bash
git add .
git commit -m "describe el cambio"
git push
```

---

## Crédito

Tomin-ki es un producto de **Tlahtocan Software**. Marca, paleta y tipografía según el *Manual de identidad Tomin-ki*.

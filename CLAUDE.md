# Tomin-ki — Landing de Acceso Anticipado (PAA)

> Contexto para Claude / desarrollo. Léeme antes de editar.

## Qué es esto
Landing page de una sola página (`index.html`) para el **Programa de Acceso Anticipado (PAA)** de **Tomin-ki**, una app de finanzas personales para México. El objetivo de la página es captar correos de usuarios fundadores (waitlist).

- **Producto real / referencia de copy:** https://tomin-ki.beta.tlahtocan.software/
- **Proyecto fuente del que se tomaron secciones/mockups:** `..\lannding\Tomin ki - paa` (React vía CDN; de ahí salieron Espacios, Metas IA, Tarjetas, Gastos compartidos, Préstamos y las imágenes `prod-dashboard.png` / `prod-mobile.png`).
- **Manual de marca:** `Manual de identidad Tomin-ki.pdf` (raíz). Voz, valores, paleta y reglas tipográficas.

## Stack
- **HTML + CSS + JS puro.** Sin build, sin frameworks, sin dependencias.
- `index.html` enlaza `css/styles.css` y `js/main.js` (separados para trabajo en equipo).
- Tipografía vía Google Fonts (Red Hat Display + Red Hat Mono).

## Estructura de archivos
```
Landing_tomninki/
├── index.html               ← marcado HTML
├── css/
│   └── styles.css           ← todo el CSS (tokens, secciones, responsive)
├── js/
│   └── main.js              ← todo el JS (nav scroll+aria-expanded, reveal, FAQ accesible, modal)
├── assets/
│   ├── img/
│   │   ├── logo-tominki.svg       ← logo (símbolo moneda-mandala)
│   │   ├── logo-pattern.svg       ← solo mandala blanca, fondo transparente (patrón CTA)
│   │   ├── mascota-cuerpo.png     ← cuerpo completo (Espacios)
│   │   ├── mascota-insignia.png   ← mascota con insignia de Fundador (PAA bloque 01)
│   │   ├── mascota-emocionado.png ← cabeza feliz (CTA, modal éxito)
│   │   ├── mascota-triste.png     ← (sección El Problema)
│   │   ├── prod-dashboard.png     ← 1920×1080, dashboard (hero + multiplataforma)
│   │   └── prod-mobile.png        ← 412×917, app móvil (hero + multiplataforma)
│   └── video/                     ← video original del hero anterior, hoy SIN USO
│       ├── video-principal.mp4
│       └── video-poster.jpg
├── scripts/                 ← servidor local + Cloudflare Quick Tunnel
│   ├── serve-tunnel.bat     ← Windows (doble clic)
│   ├── serve-tunnel.ps1     ← Windows PowerShell
│   └── serve-tunnel.sh      ← macOS/Linux
├── Recuersos/               ← fuentes originales (en .gitignore, NO se publican)
├── Manual de identidad Tomin-ki.pdf
├── .gitignore
├── CLAUDE.md                ← este archivo
└── README.md                ← documentación
```

## Sistema de marca (tokens en `:root` de `css/styles.css`)
- **Accent (morado):** `--accent #432DD7` · `--neon #A594F9` · `--neon2 #C58AFF`
- **Oscuros:** `--oscuro #14143A` · `--humo #1C1E4A` · `--medio #3A3A78` · `--ceniza #9890CB`
- **Claros:** `--crema #EDEBFF` · `--blanco #fff`
- **Sunrise (amarillo, solo acentos):** `--amarillo #FFD23F` · `--azul-tinta #16183F`
- **Verde positivos:** `--ok #1f9d57` y `--p-accent #10B981` (montos en verde del prototipo)
- **Fuentes:** `--display` = Red Hat Display, `--mono` = Red Hat Mono
- **Radios:** `--r-sm 6` `--r-md 11` `--r-lg 16` `--r-xl 28` `--r-pill 999`
- **`--maxw` 1180px** (ancho del `.wrap`)
- Hay un **puente de variables** del prototipo (`--ink, --muted, --surface, --bg, --bg-soft, --line, --primary, --primary-soft, --p-accent, --radius*, --shadow*, --font-*`) para que el CSS portado funcione con esta paleta.
- **`.wrap`**: `max-width: var(--maxw)` + `padding-left/right: max(44px, env(safe-area-inset-...))`. Los 44px laterales se aplicaron en todo el sitio.

## Orden de secciones (IDs)
`#contenido` (hero) → cintillo `.trust` (dentro del hero) → `#problema` → `#beneficios` (Plataforma, 6 tarjetas) → secciones de producto del prototipo dentro de `.psec-wrap` (`#features` multiplataforma + Espacios + Metas IA + Tarjetas + Gastos compartidos + Préstamos) → **`#unirme` (CTA final)** → `#acceso` (PAA, 5 bloques) → `#faq` → footer → modal `#paaModal`.

> **Importante:** el CTA va **antes** del PAA — primero cierra la venta, luego responde los detalles del programa y las FAQs.

## Voz de marca (resumen del manual)
- **Tagline canónico:** *"Tus finanzas, por fin claras."*
- **Regla de oro:** "Si una abuela no lo entendería a la primera, hay que volver a escribirlo."
- **Tono:** Claro (frases cortas, una idea por oración) · Cálido (de tú) · Motivador (siguiente paso) · Mexicano (natural, sin modismos forzados).
- **Decimos:** *"Tranquilo, lo acomodamos juntos."* · **NO decimos:** *"Su objetivo de ahorro presenta un avance del 87.4%."*
- **Botón canónico:** **"Apartar mi lugar"** (no "Regístrate" ni "Solicitar acceso").
- Todo el copy de la landing ya está alineado al manual (barrido aplicado).

## Patrones / convenciones actuales

### Hero (`.hero`, `#contenido`)
- **Fondo blanco con degradado** `linear-gradient(180deg, var(--crema), #fff)` (crema arriba, blanco abajo). El cintillo crema queda integrado al final.
- **Sin video, sin scrim, sin mandala decorativo** (el `<video>` original quedó huérfano en `assets/video/`).
- **2 columnas (`.hero-grid`)**: texto a la izquierda, mockup a la derecha. `align-items: center`, `align-self: center` en el mockup.
- **H1** en `--oscuro`, peso 600. Resalte en *italic* + accent + peso 900 en las palabras "finanzas" y "claras" (`<span class="hl">`).
- **CTA** = `btn-primary` (morado, sin sombra). Microcopy mono debajo.
- **Mockup (`.hero-mockup`)**: `max-width: 560px`, `justify-self: end`. Window de browser (3 dots + URL `app.tomin.ki/dashboard`) + dashboard 1920×1080 + phone 412×917 a 165px de ancho asomando por la esquina inferior derecha.
- `min-height: 100svh` para abarcar todo el viewport. El cintillo `.trust` queda anclado al fondo (flex column + `flex:1` en `.hero-body`).

### Nav (`header.nav`)
- **Sobre el hero**: 100% transparente, sin blur, sin sombra. Texto oscuro.
- **Al hacer scroll** (`.scrolled`, JS toggle en `scrollY>30`): `background: rgba(255,255,255,.7)` + `backdrop-filter: blur(14px) saturate(140%)` + borde inferior sutil + sombra.
- Links centrados (`flex:1`), CTA "Iniciar Sesión" a la derecha. Toggle hamburguesa en móvil con `aria-expanded` y `aria-controls="navLinks"` sincronizados desde JS.

### Cintillo `.trust`
- Fondo `--crema`, texto `--medio`, primer carácter (`◆`) en `--accent` vía `::first-letter`.

### Sección Problema (`.problem`)
- Fondo plano `#fff` (sin gradiente).

### Sección Plataforma (`#beneficios`)
- Fondo con degradado `linear-gradient(180deg, #fff 0%, var(--bg) 100%)` — termina en `--bg` para encadenar visualmente con el `.psec-wrap` siguiente.

### PAA bloque 01 (`.paa-what`)
- Grid `1fr 1.1fr`. **Mascota insignia a la izquierda** (`grid-column:1`, `justify-self:start`, `width:320px`), texto a la derecha (`grid-column:2`).

### CTA final (`.cta-final`)
- Ya **no es banda full-bleed**. Es un **card** dentro del `.wrap`: `padding:40px 0` en el `<section>`, el fondo morado + esquinas redondeadas + padding `56px 40px` se aplican al `> .wrap` interno.
- **Patrón del logo** como background del card: `.cta-final > .wrap::before` con `url(../assets/img/logo-pattern.svg)`, `background-size:110px 110px`, `opacity:.1`.
- Mascota emocionado 170×170 (era 250×250).

### Footer
- **Light**, no oscuro. `background: var(--crema)` con borde superior sutil.
- Brand y bottom-strip en `--oscuro`, links en `--medio` con hover en `--accent`. Encabezados de columna en `--accent` (estilo eyebrow).

### Botones (`.btn`)
- **Sin `box-shadow`** ni en reposo ni en hover (eliminado por decisión de diseño). Hover en `btn-primary` oscurece el morado (`#3320a0`).

### Modal PAA (`#paaModal`)
- Correo + checkbox de términos + enviar. Abre con cualquier elemento con atributo `data-open-modal`. Accesible: `role=dialog`, Esc, click fuera, foco gestionado, sincronización `aria-invalid`.

### Animaciones
- `.reveal` + `IntersectionObserver` (respeta `prefers-reduced-motion`).
- FAQ acordeón con `aria-expanded` sincronizado y `aria-controls` apuntando a `faq-a-N` (id por respuesta).

### Reglas generales
- Iconos: SVG inline. Caracteres especiales en HTML como entidades (`&oacute;`, `&ntilde;`).
- Editar con reemplazos exactos; tras editar, validar balance de `<div>` y `node --check js/main.js`.
- A11y: skip link, `:focus-visible` global con outline `--neon2`, `text-wrap:balance` en headings, `color-scheme:light`, `touch-action:manipulation` en botones, `[id]{scroll-margin-top:92px}`.

## Cómo correr
```bash
# Servidor local + túnel público
scripts\serve-tunnel.bat       # Windows (doble clic)
./scripts/serve-tunnel.sh      # macOS/Linux
# o desde la raíz:
python -m http.server 8080     # abrir http://localhost:8080
```
Los scripts hacen `cd` a la raíz del proyecto. Requisitos del túnel: Python y `cloudflared` (el script ofrece instalarlo con winget).

## Git / repositorio
- **Repo:** https://github.com/frvnciscx/Landing_tomninki
- `Recuersos/` está en `.gitignore`. Los assets finales sí se versionan.
- Sitio estático: deploy directo a GitHub Pages, Netlify, Vercel o Cloudflare Pages.

```bash
git add .
git commit -m "describe el cambio"
git push
```

## Skills instaladas (~/.claude/skills/, nivel usuario)
- **web-design-guidelines** (vercel) — auditar UI vs 100+ reglas a11y/perf/UX
- **writing-guidelines** (vercel) — auditar copy/docs (pensado para inglés; con copy en español aplica con criterio)
- **deploy-to-vercel** — desplegar a Vercel
- **vercel-optimize** — optimizar costos/performance de proyectos en Vercel

## PENDIENTE
1. **Conectar el formulario/modal a un backend.** El modal (`#paaFormEl`) NO guarda los correos hoy: solo hace `console.log` y muestra éxito. Hay un `// TODO` en el JS. Conectar a Mailchimp / Formspree / API propia.
2. **Términos y Aviso de Privacidad:** el modal y el footer enlazan a las URLs del beta. Verificar que sean las definitivas.
3. **Posible redundancia:** la sección "Plataforma" (6 tarjetas) se solapa temáticamente con las secciones de producto del prototipo. Evaluar si se simplifica.
4. **Limpiar `assets/video/`:** el `video-principal.mp4` y `video-poster.jpg` quedaron huérfanos (el hero ya no usa video). Borrar si no se reutilizan.
5. **Revisión visual real:** abrir en navegador y revisar en desktop/móvil. Hubo un problema reportado con el dashboard del hero renderizándose grande; se aplicó `max-width:560px` + `aspect-ratio:16/9` + `height:auto` — confirmar que quedó bien.

## Nota
El correo de contacto del sitio beta es `contacto@tlatocan.software` (sin "h"); se respetó tal cual. Confirmar si es typo.

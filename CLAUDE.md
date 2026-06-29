# Tomin-ki — Landing de Acceso Anticipado (PAA)

> Contexto para Claude / desarrollo. Léeme antes de editar.

## Qué es esto
Landing page de una sola página (`index.html`) para el **Programa de Acceso Anticipado (PAA)** de **Tomin-ki**, una app de finanzas personales para México. El objetivo de la página es captar correos de usuarios fundadores (waitlist).

- **Producto real / referencia de copy:** https://tomin-ki.beta.tlahtocan.software/
- **Proyecto fuente del que se tomaron secciones/mockups:** `..\lannding\Tomin ki - paa` (React vía CDN; de ahí salieron Espacios, Metas IA, Tarjetas, Gastos compartidos, Préstamos y las imágenes `prod-dashboard.png` / `prod-mobile.png`).
- **Manual de marca:** El PDF original (`Manual de identidad Tomin-ki.pdf`) no se versiona (está en `.gitignore`). La voz, paleta y reglas tipográficas relevantes están reflejadas en este documento y en `:root` de `css/styles.css`.

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
│   │   ├── mascota-cuerpo.png     ← cuerpo completo (Espacios) — SIN USO actual
│   │   ├── mascota-insignia.png/.webp   ← mascota con insignia de Fundador (PAA bloque 01)
│   │   ├── mascota-emocionado.png/.webp ← cabeza feliz (CTA, modal éxito)
│   │   ├── mascota-triste.png/.webp     ← (sección El Problema)
│   │   ├── prod-dashboard.png/.webp     ← 1920×1080, dashboard (hero + multiplataforma)
│   │   └── prod-mobile.png/.webp        ← 412×917, app móvil (hero + multiplataforma)
│   └── video/                     ← video original del hero anterior, hoy SIN USO
│       ├── video-principal.mp4
│       └── video-poster.jpg
├── scripts/                 ← servidor local + Cloudflare Quick Tunnel
│   ├── serve-tunnel.bat     ← Windows (doble clic)
│   ├── serve-tunnel.ps1     ← Windows PowerShell
│   └── serve-tunnel.sh      ← macOS/Linux
├── robots.txt               ← SEO: Allow all + ref a sitemap
├── sitemap.xml              ← SEO: una sola URL (home)
├── Recuersos/               ← fuentes originales (en .gitignore, NO se publican)
├── .gitignore               ← ignora Recuersos/, .claude/, PDF del manual, *.log, OS files
├── CLAUDE.md                ← este archivo
└── README.md                ← documentación
```

> **Imágenes WebP:** cada `<img>` de fotos/mascotas va envuelto en `<picture>` con `<source type="image/webp">` + fallback PNG. El CSS tiene `picture{display:contents}` para que el wrapper no rompa el layout. Ahorro ~86% (PNG ~2070KB → WebP ~225KB). Las `.webp` se generaron con Pillow.

## Sistema de marca (tokens en `:root` de `css/styles.css`)
- **Accent (morado):** `--accent #432DD7` · `--neon #A594F9` · `--neon2 #C58AFF`
- **Oscuros:** `--oscuro #14143A` · `--humo #1C1E4A` · `--medio #3A3A78` · `--ceniza #9890CB`
- **Claros:** `--crema #EDEBFF` · `--blanco #fff`
- **Sunrise (amarillo):** `--amarillo #FFD23F` · `--azul-tinta #16183F`. El manual lo define como "solo acentos", PERO hay **dos excepciones deliberadas** (jun-2026): el CTA final usa amarillo sólido `#ffd84d` como fondo, y la sección PAA arranca en amarillo lavado `#FFF6D9`. Ambos hex viven hardcodeados en `css/styles.css` (no son tokens).
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
- **Móvil (≤900px):** el `.phone-frame` se **oculta** (`display:none`) — en pantallas chicas el dashboard + teléfono encimados se veía apretado; se deja solo el dashboard. Se quitó también el `padding-bottom` que reservaba el hueco del teléfono.
- `min-height: 100svh` para abarcar todo el viewport. El cintillo `.trust` queda anclado al fondo (flex column + `flex:1` en `.hero-body`).
- **GOTCHA padding (resuelto jun-2026):** el contenedor es `<div class="wrap hero-grid">`. `.hero-grid` debe fijar el padding vertical con **longhand** (`padding-top`/`padding-bottom`), NUNCA con el shorthand `padding:Npx 0` — ese `0` lateral pisa el `padding-left/right:max(44px,…)` del `.wrap` (misma especificidad, declarado después) y deja el hero pegado al borde, mientras el resto del sitio sí tiene margen. Síntoma histórico: "el hero no tiene margen" + desfase texto/mockup.

### Nav (`header.nav`)
- **Sobre el hero**: 100% transparente, sin blur, sin sombra. Texto oscuro.
- **Al hacer scroll** (`.scrolled`, JS toggle en `scrollY>30`): `background: rgba(255,255,255,.7)` + `backdrop-filter: blur(14px) saturate(140%)` + borde inferior sutil + sombra.
- Links centrados (`flex:1`), CTA "Iniciar Sesión" a la derecha. Toggle hamburguesa en móvil con `aria-expanded` y `aria-controls="navLinks"` sincronizados desde JS.
- **Menú móvil abierto (`.nav-links.open`):** usa el **mismo vidrio translúcido** que la nav al scrollear (`rgba(255,255,255,.7)` + `backdrop-filter:blur(14px) saturate(140%)`), sin sombra y con borde inferior sutil. Antes era un panel `#fff` sólido con drop-shadow (el "cuadro blanco" que saltaba al abrir).

### Cintillo `.trust`
- Fondo `--crema`, texto `--medio`, primer carácter (`◆`) en `--accent` vía `::first-letter`.

### Sección Problema (`.problem`)
- Fondo plano `#fff` (sin gradiente).

### Sección Plataforma (`#beneficios`)
- Fondo con degradado `linear-gradient(180deg, #fff 0%, var(--bg) 100%)` — termina en `--bg` para encadenar visualmente con el `.psec-wrap` siguiente.

### Sección PAA (`.paa`, `#acceso`)
- **Fondo con degradado** `linear-gradient(180deg, #FFF6D9 0%, #FFF6D9 7%, #fff 46%)` — amarillo lavado (`#FFF6D9`) arriba que muere en blanco hacia el ~46% de la sección, para enlazar sin corte con las FAQs (body es `--blanco`). Continúa visualmente el amarillo del CTA pero sin competir con él. (Antes era `#fff → --crema`.)
- Las tarjetas internas (`.paa-what`, `.paa-card`, `.paa-info .ic`, `.paa-step`) siguen en `#fff`: sobre el amarillo lavado del arranque resaltan, y al volverse blanco el fondo se integran.

### PAA bloque 01 (`.paa-what`)
- Grid `1fr 1.1fr` con `align-items:center`. **Mascota insignia a la izquierda** (`grid-column:1`, **`grid-row:1`**, `justify-self:start`, `width:320px`), texto a la derecha (`grid-column:2`, **`grid-row:1`**).
- El `grid-row:1` explícito en ambos es **obligatorio**: como el `<p>` viene primero en HTML, sin él el auto-placement pone el texto en fila 1 y la mascota se va a fila 2 (quedan en diagonal).
- **GOTCHA móvil:** como `p` e `img` tienen `grid-column` explícito (2 y 1), al colapsar en móvil **no basta** con `grid-template-columns:1fr` — el grid crea una 2ª columna implícita y el texto se exprime (una palabra por línea + overflow). En `@media(max-width:860px)` hay que resetear: `.paa-what p,.paa-what img{grid-column:auto;grid-row:auto}`. La mascota lleva `order:-1` para quedar arriba del texto.

### PAA bloque 05 (`.paa-step` × 3)
- "¿Qué sigue?" ya **no** es onboarding del usuario. Describe 3 features de IA que vienen para la app:
  1. **Lee tus tickets por ti** (OCR)
  2. **Arma tus metas a tu ritmo** (planificador IA)
  3. **Aprende de ti y te sugiere** (recomendaciones personalizadas)
- Grid `repeat(3,1fr)` en desktop, 1 col en mobile.
- `.sn` ahora es **icon container** (46×46, crema/accent) con SVG inline — ya no es texto numérico.

### CTA final (`.cta-final`)
- **Posición:** entre `.psec-wrap` y `#acceso` (antes del PAA, no después). Cierra la venta antes de entrar al detalle del programa.
- Ya **no es banda full-bleed**. Es un **card** dentro del `.wrap`: `padding:40px 0` en el `<section>`, el fondo + esquinas redondeadas + padding `56px 40px` se aplican al `> .wrap` interno.
- **Fondo amarillo sólido `#ffd84d`** (decisión de diseño jun-2026, antes era degradado morado). Como el amarillo del manual es "solo acentos", este es un uso deliberado fuera de regla — el CTA es el único bloque a pantalla con amarillo sólido.
- **Texto oscuro sobre amarillo:** h2/eyebrow inline en `--accent` (morado), `p` en `--medio`, `.wl-note` en `rgba(20,20,58,.72)` (subido para pasar AA 4.5:1). El eyebrow "Cupos Abiertos" pasó de `--amarillo` a `--accent` (sobre amarillo habría desaparecido).
- **Botón:** `.btn-sun` se reconvirtió a morado (`background:var(--accent);color:#fff`, hover `#3320a0`) — antes era blanco con texto morado. Solo se usa aquí.
- **Patrón del logo** como background del card: `.cta-final > .wrap::before` con `url(../assets/img/logo-pattern.svg)`, `background-size:110px 110px`. Como el SVG es mandala **blanca**, sobre amarillo se le aplica `filter:brightness(0);opacity:.05` para volverlo un texturado oscuro tenue.
- Mascota emocionado 170×170 (era 250×250), drop-shadow en `rgba(20,20,58,.22)`.
- **Móvil (≤600px):** el card lleva `margin-left/right:24px` para dejar un respiro de 24px contra el borde (su `padding` propio pisa el lateral del `.wrap`, así que el margen va en el card, no en la sección).

### Footer
- **Light**, no oscuro. `background: var(--crema)` con borde superior sutil.
- Brand y bottom-strip en `--oscuro`, links en `--medio` con hover en `--accent`. Encabezados de columna en `--accent` (estilo eyebrow).

### Botones (`.btn`)
- **Sin `box-shadow`** ni en reposo ni en hover (eliminado por decisión de diseño). Hover en `btn-primary` oscurece el morado (`#3320a0`).

### Modal PAA (`#paaModal`)
- Correo + checkbox de términos + enviar. Abre con cualquier elemento con atributo `data-open-modal`.
- A11y: `role=dialog`, `aria-modal=true`, `aria-live=polite` en `.modal-success`, Esc, click fuera, restauración de foco al cerrar, sincronización `aria-invalid`, focus al **primer campo inválido** en submit.
- **Focus trap:** Tab/Shift+Tab ciclan dentro del modal (no escapan al fondo).
- **Autofocus solo en desktop:** se enfoca el email vía `requestAnimationFrame` cuando `matchMedia('(hover:hover) and (pointer:fine)')` matchea. En móvil no se enfoca para no abrir el teclado virtual de golpe.
- `overscroll-behavior:contain` evita scroll-chaining al fondo.

### Animaciones
- `.reveal` + `IntersectionObserver` (respeta `prefers-reduced-motion`).
- FAQ acordeón con `aria-expanded` sincronizado y `aria-controls` apuntando a `faq-a-N` (id por respuesta).

### Reglas generales
- Iconos: SVG inline. Caracteres especiales en HTML como entidades (`&oacute;`, `&ntilde;`).
- Editar con reemplazos exactos; tras editar, validar balance de `<div>` y `node --check js/main.js`.
- **Imágenes con atributos `width`/`height`:** SIEMPRE acompañar con `height:auto` en CSS si se aplica `width:100%`, o el atributo HTML gana sobre el aspect-ratio implícito y la imagen se renderiza estirada (caso histórico: el dashboard de `#features` salía 970×1080 en vez de 970×546). Patrón seguro: `width:100%;height:auto;aspect-ratio:N/M`.
- A11y: skip link (con `transform`, no `top`), `:focus-visible` global con outline `--neon2`, `text-wrap:balance` en headings, `color-scheme:light`, `touch-action:manipulation` en botones, `[id]{scroll-margin-top:92px}`, `translate="no"` en menciones de marca ("Tomin-ki", "Tlahtocan Software") en body copy.
- **`prefers-reduced-motion`** cubre `.reveal`, animaciones del prototipo (`.bar`, `.hero-float`), accordion `.faq-a`, modal pop/fade, skip-link.

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

## SEO (aplicado)
- `index.html`: `<title>` + `description`, `canonical` a **https://tomin-ki.tlahtocan.software/**, Open Graph (con `og:image` absoluta + width/height/type), Twitter Cards y JSON-LD (Organization / WebSite / SoftwareApplication) antes de `</head>`.
- `robots.txt` (Allow all + Sitemap) y `sitemap.xml` (home) en la raíz, ambos apuntando al dominio de producción.
- **Dominio de producción:** `https://tomin-ki.tlahtocan.software/`.

## PENDIENTE
1. **Desfase intermitente en hero móvil (parcial):** la causa principal (el `padding:Npx 0` de `.hero-grid` que borraba el margen lateral del `.wrap`) ya se corrigió. PERO aún aparece un pequeño desajuste **según las dimensiones del dispositivo** (en unos anchos sí, en otros no). No diagnosticado a fondo; sospechosos: el breakpoint `860/900px`, el `gap`/`align` del grid en anchos intermedios, o el `clamp()` del `h1`. Aceptado como está por ahora.
2. **Conectar el formulario/modal a un backend.** El modal (`#paaFormEl`) NO guarda los correos hoy: solo valida y muestra éxito. Hay un `// TODO` en el JS. Conectar a Mailchimp / Formspree / API propia, idealmente con spinner real durante el request (rule de forms).
3. **Términos y Aviso de Privacidad:** el modal y el footer enlazan a las URLs del beta. Verificar que sean las definitivas.
4. **Posible redundancia:** la sección "Plataforma" (6 tarjetas) se solapa temáticamente con las secciones de producto del prototipo. Evaluar si se simplifica.
5. **Limpiar `assets/video/` + `mascota-cuerpo.png`:** quedaron huérfanos (el hero ya no usa video; el cuerpo no se usa). Borrar con `git rm` si no se reutilizan.
6. **Sugerencias del audit Vercel pendientes de aplicar** (esperan validación): `type="button"` en `.faq-q`; `og:image:width/height/type` ya agregados ✓; regex de email más estricto; `env(safe-area-inset-bottom)` en footer para iOS landscape.

## Nota
El correo de contacto del sitio beta es `contacto@tlatocan.software` (sin "h"); se respetó tal cual. Confirmar si es typo.

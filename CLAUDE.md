# Tomin-ki — Landing de Acceso Anticipado (PAA)

> Contexto para Claude / desarrollo. Léeme antes de editar.

## Qué es esto
Landing page de una sola página (`index.html`) para el **Programa de Acceso Anticipado (PAA)** de **Tomin-ki**, una app de finanzas personales para México. El objetivo de la página es captar correos de usuarios fundadores (waitlist).

- **Producto real / referencia de copy:** https://tomin-ki.beta.tlahtocan.software/
- **Proyecto fuente del que se tomaron secciones/mockups:** `..\lannding\Tomin ki - paa` (React vía CDN; de ahí salieron Espacios, Metas IA, Tarjetas, Gastos compartidos, Préstamos y las imágenes `prod-dashboard.png` / `prod-mobile.png`).
- **Manual de marca:** `Recuersos\Manual de identidad Tomin-ki.pdf`.

## Stack
- **HTML + CSS + JS puro.** Sin build, sin frameworks, sin dependencias.
- `index.html` enlaza `css/styles.css` y `js/main.js` (se separaron del HTML para trabajo en equipo).
- Tipografía vía Google Fonts (Red Hat Display + Red Hat Mono).

## Estructura de archivos
```
Acceso anticipado-landing/
├── index.html               ← marcado HTML (enlaza css/ y js/)
├── css/
│   └── styles.css           ← todo el CSS (tokens, secciones, responsive)
├── js/
│   └── main.js              ← todo el JS (nav scroll, reveal, FAQ, modal)
├── assets/
│   ├── img/
│   │   ├── logo-tominki.svg       ← logo (símbolo moneda-mandala)
│   │   ├── mascota-cuerpo.png     ← mascota cuerpo completo (Espacios, PAA)
│   │   ├── mascota-emocionado.png ← cabeza feliz transparente (CTA, modal éxito)
│   │   ├── mascota-triste.png     ← mascota triste (sección El Problema)
│   │   ├── prod-dashboard.png     ← captura dashboard (multiplataforma)
│   │   └── prod-mobile.png        ← captura app móvil (multiplataforma)
│   └── video/
│       ├── video-principal.mp4    ← video de fondo del hero (1280x720, 8s)
│       └── video-poster.jpg       ← poster del video
├── scripts/                 ← servidor local + Cloudflare Quick Tunnel
│   ├── serve-tunnel.bat     ← Windows (doble clic)
│   ├── serve-tunnel.ps1     ← Windows PowerShell
│   └── serve-tunnel.sh      ← macOS/Linux
├── Recuersos/               ← fuentes originales (en .gitignore, NO se publican)
├── .gitignore
├── CLAUDE.md                ← este archivo
└── README.md                ← documentación
```

## Sistema de marca (tokens en `:root` de index.html)
- **Accent (morado):** `--accent #432DD7` · `--neon #A594F9` · `--neon2 #C58AFF`
- **Oscuros:** `--oscuro #14143A` · `--humo #1C1E4A` · `--medio #3A3A78` · `--ceniza #9890CB`
- **Claros:** `--crema #EDEBFF` · `--blanco #fff`
- **Sunrise (amarillo, solo acentos):** `--amarillo #FFD23F` · `--azul-tinta #16183F`
- **Verde positivos:** `--ok #1f9d57` y `--p-accent #10B981` (montos en verde de secciones del prototipo)
- **Fuentes:** `--display` = Red Hat Display (títulos), `--mono` = Red Hat Mono (etiquetas/cifras)
- **Radios:** `--r-sm 6` `--r-md 11` `--r-lg 16` `--r-xl 28` `--r-pill 999`
- Hay un **puente de variables** del prototipo (`--ink, --muted, --surface, --bg, --bg-soft, --line, --primary, --primary-soft, --p-accent, --radius*, --shadow*, --font-*`) para que el CSS portado de las secciones de producto funcione con esta paleta.

## Orden de secciones (IDs)
`#contenido` (hero) → cintillo (dentro del hero) → `#problema` → `#beneficios` (Plataforma, 6 tarjetas) → secciones de producto del prototipo (`#features` multiplataforma + Espacios + Metas IA + Tarjetas + Gastos compartidos + Préstamos, dentro de `.psec-wrap`) → `#acceso` (PAA, 5 bloques) → `#faq` → `#unirme` (CTA final) → footer → modal `#paaModal`.

## Patrones / convenciones
- **Hero:** video full-bleed (`.hero-video`, 70% derecha) + `.hero-scrim` (degradado morado→transparente) + texto a la izquierda dentro de `.hero-body > .wrap`. Header (nav) y cintillo (`.trust`) usan el mismo estilo glass translúcido.
- **Nav:** transparente sobre el hero (texto blanco), se vuelve blanco con sombra al hacer scroll (`.scrolled`, toggle por JS `scrollY>30`). Links centrados (`.nav-links{flex:1}`), CTA "Iniciar Sesión" a la derecha. En móvil el CTA va dentro del menú hamburguesa (`.nav-cta-mobile`).
- **Modal PAA (`#paaModal`):** correo + checkbox de términos + enviar. Se abre con cualquier elemento que tenga el atributo `data-open-modal` (hero, CTA final, botón del PAA). Accesible: `role=dialog`, Esc, click fuera, foco gestionado.
- **Animaciones:** `.reveal` + `IntersectionObserver` (respeta `prefers-reduced-motion`).
- Iconos: SVG inline. Caracteres especiales en HTML como entidades (`&oacute;`, `&ntilde;`, etc.).
- Editar con reemplazos exactos; tras editar, validar balance de `<div>` y `node --check` del `<script>`.

## Cómo correr
```bash
# Servidor local + túnel público (Windows: doble clic)
scripts\serve-tunnel.bat       # Windows
./scripts/serve-tunnel.sh      # macOS/Linux
# o simple, desde la raíz del proyecto:
python -m http.server 8080     # luego abrir http://localhost:8080
```
Los scripts hacen `cd` a la raíz del proyecto (aunque vivan en `scripts/`). Requisitos del túnel: Python y `cloudflared` (el script ofrece instalarlo con winget).

## Git / repositorio
- `Recuersos/` está en `.gitignore` (fuentes pesadas). Los assets finales sí se versionan (`assets/`).
- Es un sitio estático: se puede desplegar tal cual en GitHub Pages, Netlify, Vercel o Cloudflare Pages (raíz = este folder, sin build).

## PENDIENTE (lo más importante)
1. **Conectar el formulario/modal a un backend.** Hoy el modal (`#paaFormEl`) y NO guarda los correos: solo hace `console.log` y muestra éxito. Hay un `// TODO` en el JS. Conectar a Mailchimp / Formspree / API propia. Es el único punto: el modal centraliza toda la captura.
2. **Términos y Aviso de Privacidad:** el modal y el footer enlazan a las URLs del beta (`/terminos-y-condiciones`, `/aviso-de-privacidad`, etc.). Verificar que sean las definitivas.
3. **Posible redundancia:** la sección "Plataforma" (6 tarjetas) se solapa temáticamente con las secciones de producto del prototipo. Evaluar si se simplifica.
4. **Revisión visual real:** los cambios se validaron a nivel de código (no hay navegador headless en el entorno de origen). Conviene abrir en navegador y revisar en desktop/móvil.

## Nota
El correo de contacto del sitio beta es `contacto@tlatocan.software` (sin "h"); se respetó tal cual. Confirmar si es typo.

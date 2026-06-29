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
├── robots.txt        → SEO (Allow all + sitemap)
├── sitemap.xml       → SEO (home)
├── .gitignore        → ignora Recuersos/, .claude/, PDF del manual, OS files
├── CLAUDE.md         → guía técnica para continuar el desarrollo
└── README.md         → este archivo
```

> **Imágenes:** las fotos van como WebP con fallback PNG (`<picture>`), ~86% más ligeras. **SEO:** `index.html` trae canonical, Open Graph, Twitter Cards y JSON-LD; el dominio de producción es `https://tomin-ki.tlahtocan.software/`.

No se versionan: `Recuersos/` (fuentes originales pesadas), `.claude/` (config del editor Claude Code) y el PDF del manual de marca.

> Sitio 100% estático: desplegable tal cual en GitHub Pages, Netlify, Vercel o Cloudflare Pages (sin build).

## Secciones de la página

1. **Hero** — fondo blanco con degradado crema, mensaje a la izquierda con H1 *"Tus finanzas, por fin claras."* (con palabras resaltadas en italic morado) + mockup de dashboard y app móvil a la derecha.
2. **Cintillo de confianza** — 4 beneficios clave en una línea (crema).
3. **El Problema** — tres dolores financieros + mascota triste.
4. **Plataforma** — 6 funciones principales (degradado blanco → bg-soft).
5. **Producto** (réplica del prototipo) — multiplataforma, Espacios, Metas con IA, Control de tarjetas, Gastos compartidos, Préstamos.
6. **CTA final** — card **amarillo** (`#ffd84d`) con patrón del logo en oscuro tenue + mascota emocionado y botón morado. Abre el modal de registro. **Posicionada antes del PAA** para cerrar la venta antes del detalle del programa.
7. **Acceso Anticipado (PAA)** — arranca con un degradado amarillo lavado (`#FFF6D9`) que muere en blanco hacia las FAQs. 5 bloques:
   - 01 qué es el PAA (con mascota-insignia)
   - 02 beneficios (4x1, co-crea, insignia, soporte prioritario)
   - 03 duración (gratis durante beta, invitaciones por olas)
   - 04 desarrollo de funciones (roadmap + votaciones)
   - 05 **lo que viene en IA** (lee tickets, arma metas, sugiere ahorros)
8. **Preguntas frecuentes (FAQ)** — acordeón accesible (`aria-expanded` + `aria-controls`).
9. **Footer** — contacto, legales, redes (fondo crema, texto oscuro).
10. **Modal de registro** — correo + checkbox de términos. Accesible: focus trap, Esc, click fuera, autofocus solo en desktop, anuncio del éxito vía `aria-live`.

---

## Personalización rápida

- **Colores y fuentes:** variables CSS en el bloque `:root` de `css/styles.css`.
- **Textos:** directamente en el HTML de `index.html` (alineados a la voz del manual de marca).
- **Imágenes:** reemplazar archivos dentro de `assets/img/` conservando el nombre.
- **Mascota:** `mascota-insignia.png`, `mascota-cuerpo.png`, `mascota-emocionado.png`, `mascota-triste.png`.

## Conectar el formulario (pendiente)

El registro (modal) hoy **no envía** los datos a ningún servicio: valida y muestra un mensaje de éxito, con un `// TODO` en el JavaScript. Para capturar correos de verdad, conectar el envío a **Mailchimp**, **Formspree** o una **API propia** en ese punto del código (`#paaFormEl` dentro de `index.html`).

---

## Trabajar con el repositorio

El sitio vive en GitHub: **https://github.com/frvnciscx/Landing_tomninki**

> Requisito único: tener `git` instalado. En Windows usa Git Bash o PowerShell; en macOS/Linux la terminal del sistema.

### 1. Bajar el proyecto a tu computadora

Solo la primera vez:

```bash
git clone https://github.com/frvnciscx/Landing_tomninki.git
cd Landing_tomninki
```

Eso descarga todos los archivos en una carpeta nueva llamada `Landing_tomninki` y entra en ella.

### 2. Antes de editar, traer lo más reciente

Cada vez que vayas a trabajar, sincroniza tu copia local con lo que esté en GitHub:

```bash
git pull
```

Esto trae los cambios que cualquier otra persona (o tú desde otra máquina) haya subido. Te evita conflictos.

### 3. Editar el contenido

| Quieres cambiar… | Abre… |
|---|---|
| Textos, copy, secciones | `index.html` |
| Colores, tipografía, espaciados | `css/styles.css` (los colores están al inicio, en `:root`) |
| Imágenes (mascota, mockups) | Reemplaza el archivo dentro de `assets/img/` conservando el mismo nombre |
| Comportamiento (modal, FAQ, scroll) | `js/main.js` |
| Doc del proyecto | `README.md` (este archivo) o `CLAUDE.md` (guía técnica) |

Para verlo en tu navegador antes de subir, levanta el servidor local:

```bash
python -m http.server 8080
# abre http://localhost:8080
```

O usa los scripts `scripts/serve-tunnel.*` (incluyen túnel público con Cloudflare).

### 4. Subir tus cambios a GitHub

Cuando estés conforme:

```bash
git status                             # ver qué archivos cambiaron
git add .                              # marcar todos los cambios para subir
git commit -m "describe tu cambio"     # guardar un punto de cambio con descripción
git push                               # subir a GitHub
```

El mensaje del `commit` debe describir **qué cambió**, en una frase corta. Ejemplos buenos:

- `Actualiza copy del hero`
- `Cambia color del CTA a morado más oscuro`
- `Reemplaza foto de mascota en sección PAA`
- `Fix tipografía móvil del footer`

Después del `push`, los cambios ya están en GitHub. Si el sitio está desplegado en GitHub Pages / Netlify / Vercel / Cloudflare Pages, se publica en producción automáticamente en unos segundos.

### 5. Comandos útiles si algo sale mal

```bash
# Ver qué archivos tienes modificados sin haber subido aún
git status

# Descartar los cambios de un archivo (vuelve a la última versión guardada)
git restore <ruta/del/archivo>

# Descartar TODOS los cambios locales (¡cuidado, pierdes lo no commiteado!)
git restore .

# Ver el historial de cambios subidos
git log --oneline -10
```

### Qué NO se sube a GitHub

El archivo `.gitignore` define qué se ignora. Hoy:

- `Recuersos/` — fuentes originales pesadas del diseñador (los assets finales en `assets/img/` sí se publican).
- `Manual de identidad Tomin-ki.pdf` — referencia local del diseñador; no es asset del sitio.
- `.claude/` — config local del editor Claude Code (no afecta el sitio).
- `.DS_Store`, `Thumbs.db`, `desktop.ini`, `*.log` — basura del sistema operativo.

---

## Crédito

Tomin-ki es un producto de **Tlahtocan Software**. Marca, paleta y tipografía según el *Manual de identidad Tomin-ki*.

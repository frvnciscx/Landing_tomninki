# Guía de Diseño UI/UX - Proyecto Tomin-Ki

Esta guía documenta el **lenguaje visual, la arquitectura de información y los estándares de usabilidad** aplicados en Tomin-Ki. Está diseñada para que cualquier diseñador UI/UX pueda entender, mantener y escalar el producto manteniendo la consistencia de marca.

---

## 🎨 1. Visión y Estética (Brand Identity)

Tomin-Ki es una plataforma FinTech premium que busca transmitir **confianza, control y modernidad**. 

- **Concepto Visual**: *Modern FinTech Glassmorphism*.
- **Atmósfera**: "Dark-first" con acentos vibrantes. El modo oscuro es la experiencia nativa de la marca, mientras el modo claro ofrece una alternativa de alta legibilidad basada en grises suaves.
- **Logo oficial**: Archivo SVG vectorial ubicado en `src/logo tominki 1.svg`. Se importa directamente en Vite y se usa como `<img>` en Navbar (`w-9`), Footer (`w-10`) y AdminLayout (`w-8`). Siempre acompañado del wordmark **"Tomin-Ki"** en `font-heading font-bold`.
- **Selector de Tema**: Solo admite Claro y Oscuro (sin opción "Sistema"). El tema inicial se detecta automáticamente con `prefers-color-scheme` al montar la app.
- **Principios Estéticos**: 
  - Bordes muy redondeados (`3xl` / `24px`) para suavizar la interfaz.
  - Gradientes sutiles que guían la mirada (Focal points).
  - Uso de "Glows" y sombras difusas (`blur-3xl`) para profundidad.

---

## 📐 2. Design System (Tokens & Components)

El sistema de diseño es atómico y se apoya en una escala estricta de **4pt**.

### 🎨 Paleta de Colores (Semantic Tokens)
Los colores se definen por **función**, no solo por valor HEX.

| Token | Variable CSS | Propósito |
|---|---|---|
| **Primary** | `--color-primary` | Marca (#432DD7). Acciones principales (CTAs). |
| **Accent** | `--color-accent` | Acentos de marca (#F59E0B). Altas luces y estados VIP. |
| **Surface** | `--surface-base` | Fondos de página y contenedores principales. |
| **Success** | `--color-success` | Confirmaciones y depósitos. |
| **Danger** | `--color-danger` | Alertas críticas y gastos. |

### 🔡 Tipografía
- **Heading**: Inter / Outfit (Font weight: 900 Black). Jerarquía agresiva para marketing.
- **Body**: Inter (Font weight: 400 Regular / 500 Medium). Enfoque en legibilidad financiera.

### 🧩 Biblioteca de Componentes UI (`src/components/ui`)
Contamos con un catálogo de componentes atómicos que deben reutilizarse para evitar duplicidad de código (`dc-component-reuse`):

- `SectionHeader`: Estandarización de títulos de sección con badge y subtítulo.
- `Badge`: Etiquetas de estado con dot animado (ej: "Cupos Abiertos", "Draft").
- `Button`: Polimórfico (action/link/external). Soporta variantes `primary`, `secondary`, `ghost`.
- `Card`: Contenedor base con hover interactivo y border-glow.
- `FormInput`: Inputs accesibles con validación inline dinámica.

---

## 🏗️ 3. Arquitectura de Información (UX Architecture)

La navegación se divide en dos universos con layouts independientes:

### Layout Público (`PublicLayout`)
Enfoque en **conversión y educación**.
1. **Home**: Hero → Problem → Solution → Social Proof → **PreFooter (CTA)** → Pricing → Early Access → FAQ → Footer.
   > ⚠️ El `PreFooter` está colocado **antes de Pricing** para maximizar la conversión antes de presentar el costo.
2. **Blog**: Listado dinámico de artículos con filtros por categoría.
3. **Early Access**: Embudo de conversión directa (Micro-conversion).

### Layout Administrativo (`AdminLayout`)
Enfoque en **eficiencia y gestión de datos**.
1. **Dashboard**: Métricas clave y visión general.
2. **Post Management**: CRUD completo de entradas de blog.
3. **Responsive Sidebar**: En resoluciones `< 1024px` el sidebar se oculta y se accede mediante un botón de menú en el header. Un overlay semitransparente cubre el contenido al abrirse.

---

## 🔍 4. Framework de Evaluación Heurística

Para garantizar la calidad, seguimos el skill interno `heuristic-ux-evaluation`.

### Estándares de Interacción (`fb-*`)
- **System Status**: Cada acción asíncrona debe mostrar un spinner de carga en el botón (`Loader2`).
- **Error Recovery**: Los errores no deben ser genéricos ("Algo salió mal"). Deben incluir una instrucción de reparación y un botón de reintento.
- **Micro-animations**: Usamos `Framer Motion` para entradas suaves (`direction="up"`) y transiciones de estado de < 300ms.

### Estándares de Accesibilidad (`a11y-*`)
- **Touch Targets**: Todo elemento interactivo debe tener un área mínima de **44x44px** (Regla `a11y-touch-target`).
- **Focus States**: Nunca eliminar el outline de foco; usar anillos de foco visibles (`focus-visible:ring-2`).
- **Semantic HTML**: Usar etiquetas nativas (`<nav>`, `<main>`, `<section>`, `<button>`) para navegación por lector de pantalla.

---

## 📱 5. Diseño Responsivo (Mobile-First)

El breakpoint principal del proyecto es `lg` (1024px), alineado tanto en el Navbar público como en el AdminLayout.

| Resolución | Navbar | Admin Sidebar |
|---|---|---|
| `≥ 1024px` (Desktop) | Menú horizontal completo | Sidebar fijo visible |
| `< 1024px` (Tablet/Móvil) | Botón hamburguesa + panel animado | Overlay deslizable desde header |
| `< 640px` (Móvil SM) | Botón hamburguesa (oculta "Iniciar Sesión" en header) | Overlay deslizable |

**Menú Móvil (`Navbar.tsx`):**
- Panel a pantalla completa animado con `AnimatePresence` de Framer Motion.
- Secciones internas: Navegación / Apariencia (ThemePicker) / Autenticación.
- Bloqueo de `body.overflow` mientras el menú está abierto.
- Cierre automático al cambiar de ruta (`useEffect` → `location.pathname`).

---

## ♿ 6. Accesibilidad — Estándar WCAG AA

Todos los componentes deben superar una relación de contraste de **≥ 4.5:1** para texto normal.

| Componente | Problema Resuelto | Solución Aplicada |
|---|---|---|
| `Hero.tsx` | Badge VIP — texto `amber-500` sobre fondo claro | Subido a `amber-700` en modo claro |
| `Features.tsx` | Texto descriptivo demasiado gris en modo oscuro | Ajustado a `slate-300` |
| `Blog.tsx` (Newsletter) | Fondo translúcido hacía ilegible el copy | Gradiente sólido `from-primary to-indigo-950` |

**Pendiente para Sesión 3:** Auditar formularios `/login` y `/sign-up`.

---

## 🚀 7. Performance Percibido (`perf-*`)

El diseño debe *sentirse* instantáneo.
- **Skeleton Loaders**: En lugar de spinners de pantalla completa, usamos `SkeletonCards` que mantienen el layout mientras los datos cargan.
- **Optimistic UI**: Al cambiar el estado de un post (ej: destacar), la UI se actualiza inmediatamente antes de la respuesta del servidor.

---

## 🛠️ Próximos Pasos para un Diseñador
1. **Explorar `src/tokens/colors.ts`**: Modifica los colores base para que se propaguen a todo el CSS.
2. **Auditar con `checklist-template.md`**: Antes de lanzar una nueva pantalla, pásala por el checklist de 48 reglas heurísticas del skill `heuristic-ux-evaluation`.
3. **Escalar `src/components/ui`**: Si un patrón se repite 2+ veces, debe convertirse en un componente atómico.
4. **Logo**: Nunca usar un ícono genérico como sustituto del logo. El archivo oficial es `src/logo tominki 1.svg`.

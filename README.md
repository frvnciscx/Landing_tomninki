# 🪙 Tomin-Ki Frontend

[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-f01f7a?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

Landing Page comercial responsiva y panel administrativo definitivo para el SaaS Fintech **Tomin-Ki**, diseñado y desarrollado por Tlahtocan Software. 

Tomin-Ki es una plataforma enfocada en la optimización y salud financiera corporativa, ofreciendo una experiencia visual moderna, accesible y de alta interactividad (*Modern FinTech Glassmorphism*).

---

## 🎨 Principios de Diseño e Identidad

* **Modern FinTech Glassmorphism**: Estética basada en transparencias sutiles, bordes redondeados (`3xl`), sombras difusas (`blur-3xl`) y degradados continuos que guían la interacción del usuario sin interrupciones visuales.
* **Dual-Mode Nativo**: Dualidad de tema Claro/Oscuro sin dependencia de "System Settings". Detecta la preferencia inicial del navegador (`prefers-color-scheme`) y permite cambios rápidos mediante un selector reactivo.
* **Identidad de Marca**: Integración del logo vectorial oficial (`src/logo tominki 1.svg`) acompañado de tipografías premium como *Inter* y *Outfit* para jerarquías tipográficas de impacto.

---

## ✨ Características Principales

- **Embudo de Conversión Optimizado**: Flujo estratégico diseñado para la recolección temprana de Leads (Lista VIP) mediante secciones de dolor psicológico financiero (*Problem*), solución (*Solution*), testimonios (*Social Proof*) y tabla de precios interactiva (*Pricing*).
- **Navbar y Menú Móvil Dinámicos**: Menú responsive completo con animaciones suaves (Framer Motion) para resoluciones móviles y tablets (`< 1024px`), bloqueando el scroll del fondo mientras está activo.
- **Panel Administrativo Completo**: Área de administración protegida que cuenta con Sidebar auto-colapsable en móviles, métricas de rendimiento y CRUD interactivo de posts de blog con soporte para *Skeleton Loaders* y *Optimistic UI*.
- **Cumplimiento de Accesibilidad WCAG AA**:
  - Relación de contraste mínima de 4.5:1 verificada en textos, botones y badges.
  - Áreas táctiles de interacción adaptadas al estándar de un mínimo de **44x44px** en todos los elementos activos (`a11y-touch-target`).
  - Navegación semántica estructurada con etiquetas HTML5 nativas.

---

## 📁 Estructura del Proyecto

```bash
tomin-ki/
├── public/                 # Recursos estáticos públicos
├── src/
│   ├── assets/             # Logos y multimedia del proyecto
│   ├── components/         # Componentes de UI modulares y de secciones
│   │   └── ui/             # Componentes atómicos reutilizables (Botones, Inputs, Cards)
│   ├── context/            # Proveedores de estado global (Tema, UI)
│   ├── pages/              # Páginas de la aplicación (Landing, Blog, Admin Dashboard)
│   │   └── admin/          # Componentes y páginas específicas del área administrativa
│   ├── store/              # Manejador de estado global (Blog posts - Zustand/Custom store)
│   ├── styles/             # Variables CSS globales y configuraciones extra
│   ├── tokens/             # Definiciones semánticas de colores del Design System
│   ├── types/              # Definiciones e interfaces de TypeScript
│   └── utils/              # Funciones helper de uso común (ej: cn clase combinadora)
├── vite.config.ts          # Configuración del empaquetador Vite
└── package.json            # Scripts y dependencias del proyecto
```

Para una explicación técnica más detallada del código, consulta el archivo [ARCHITECTURE.md](file:///c:/Users/the_e/Documents/Proyectos/Sitios%20web/tomin-ki/ARCHITECTURE.md).

---

## 🚀 Instalación y Uso

### Prerrequisitos
Asegúrate de contar con **Node.js** (versión 18 o superior) y **npm** instalados en tu sistema.

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tomin-ki.git
   cd tomin-ki
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor local en caliente (Modo de Desarrollo):**
   ```bash
   npm run dev
   ```
   *El servidor local se iniciará en [http://localhost:5173/](http://localhost:5173/)*.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

5. **Previsualizar la compilación de producción localmente:**
   ```bash
   npm run preview
   ```

---

## 🔧 Exposición del Servidor (Túneles de Desarrollo)

Para exponer el servidor local a redes externas para revisión de equipo o testing móvil:

* **Localtunnel:**
  ```bash
  npm run preview -- --port 5173 --host
  npx localtunnel --port 5173 --subdomain tu-subdominio
  ```
  *(Nota: Asegúrate de ingresar tu IP pública en la pantalla de verificación del túnel si se te solicita).*

---

## 📋 Changelog Reciente

### Sesión 2 — Responsividad, Accesibilidad y Logo (Abril 2026)
* **WCAG AA**: Corrección de relaciones de contraste en componentes Hero, Features y la sección de Newsletter del Blog.
* **Orden de Secciones**: Movido el bloque `PreFooter` justo antes de `Pricing` en `App.tsx` para maximizar la conversión en el embudo comercial.
* **Framer Motion Menu**: Menú responsive animado con bloqueo de scroll para dispositivos con pantallas menores a 1024px.
* **Admin Layout Responsivo**: Sidebar deslizable en formato overlay con fondo difuminado para facilitar el acceso en tablets y teléfonos inteligentes.

### Sesión 1 — Arquitectura Base y UX Heurística (Abril 2026)
* Arquitectura base con React 19 y Tailwind CSS v4.
* Componentes atómicos en `src/components/ui/` para evitar duplicidad de estilos.
* Implementación de *Skeleton Loaders* y actualización de interfaz optimista (*Optimistic UI*) en el panel de administrador.
# Landing_tomninki

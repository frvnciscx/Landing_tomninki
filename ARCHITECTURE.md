# 🏗️ Arquitectura Técnica - Tomin-Ki Frontend

Este documento detalla la arquitectura de software, la jerarquía de directorios y los flujos de datos implementados en el frontend de **Tomin-Ki**. Su propósito es guiar a desarrolladores en el mantenimiento y escalabilidad del código.

---

## 🛠️ Stack Tecnológico Principal

- **React 19 & Vite**: Framework SPA ultra-rápido con Hot Module Replacement (HMR) y compilador optimizado.
- **Tailwind CSS v4**: Motor CSS que maneja el sistema de diseño atómico mediante variables nativas CSS y utilidades rápidas.
- **Framer Motion**: Motor de animaciones físicas para transiciones fluidas de interfaz, menús móviles y secciones interactivas.
- **Zustand (o custom store reactivo)**: Control de estado global simplificado para el CRUD y visualización de artículos en el Blog.

---

## 📂 Anatomía de Directorios e Componentes

### 1. `src/components/ui/` (Componentes Atómicos Reutilizables)
Los bloques de construcción visuales del proyecto. Ningún componente atómico debe contener lógica de negocio específica o queries directas.
*   [Button.tsx](file:///c:/Users/the_e/Documents/Proyectos/Sitios%20web/tomin-ki/src/components/ui/Button.tsx): Botón polimórfico con soporte para variantes (`primary`, `secondary`, `ghost`), estados de carga (`loading`) e iconos integrados.
*   [FormInput.tsx](file:///c:/Users/the_e/Documents/Proyectos/Sitios%20web/tomin-ki/src/components/ui/FormInput.tsx): Campo de entrada estilizado con validaciones nativas de HTML5, mensajes de error accesibles y soporte para estados deshabilitados.
*   [Badge.tsx](file:///c:/Users/the_e/Documents/Proyectos/Sitios%20web/tomin-ki/src/components/ui/Badge.tsx): Etiquetas visuales utilizadas para estados de publicación ("Publicado", "Borrador") o etiquetas VIP con micro-animación de dot reactivo.
*   [AnimatedSection.tsx](file:///c:/Users/the_e/Documents/Proyectos/Sitios%20web/tomin-ki/src/components/ui/AnimatedSection.tsx): Wrapper de animación por scroll basado en `whileInView` para automatizar la entrada suave de las secciones sin reescribir código repetitivo.

### 2. `src/context/` (Proveedores de Estado Global)
*   [ThemeContext.tsx](file:///c:/Users/the_e/Documents/Proyectos/Sitios%20web/tomin-ki/src/context/ThemeContext.tsx): Maneja el estado global del tema (Claro / Oscuro).
    *   Almacena la preferencia del usuario en `localStorage`.
    *   Detecta automáticamente la preferencia del sistema operativo del usuario mediante `window.matchMedia('(prefers-color-scheme: dark)')` al inicio de la sesión.
    *   Agrega o remueve la clase `.dark` del elemento raíz `document.documentElement` para activar los estilos correspondientes.

### 3. `src/store/` (Manejadores de Estado de Datos)
*   [useBlogStore.ts](file:///c:/Users/the_e/Documents/Proyectos/Sitios%20web/tomin-ki/src/store/useBlogStore.ts): Almacena y maneja el estado de las entradas del blog (CRUD).
    *   Implementa **Optimistic UI** en operaciones críticas de creación, edición y eliminación de posts, actualizando la interfaz antes de que la petición de servidor finalice para mejorar la percepción de velocidad.
    *   Maneja estados de error y recuperación automática (*Automatic Error Recovery*).

### 4. `src/tokens/` (Design Tokens)
*   [colors.ts](file:///c:/Users/the_e/Documents/Proyectos/Sitios%20web/tomin-ki/src/tokens/colors.ts): Configuración centralizada de tokens de color semánticos. Permite que la paleta cromática se mantenga consistente en toda la aplicación y facilita posibles rediseños en el futuro.

### 5. `src/utils/` (Funciones Helper)
*   [cn.ts](file:///c:/Users/the_e/Documents/Proyectos/Sitios%20web/tomin-ki/src/utils/cn.ts): Combinador utilitario de clases de CSS que utiliza `clsx` y `tailwind-merge` para facilitar la concatenación condicional de clases de Tailwind sin conflictos de prioridad.

---

## 🧑‍💻 Estándares de Código y UX Heurística

Para mantener la calidad y homogeneidad del proyecto, todo contribuidor debe seguir los siguientes principios:

### Usabilidad e Interacción (Heurísticas UX)
1.  **Prevención de Errores (Formularios)**: Los formularios deben validar la información en tiempo real a través de eventos `onChange` u `onBlur` usando componentes `<FormInput />`.
2.  **Visibilidad del Estado del Sistema**: Si una acción tarda más de 200ms en completarse, el elemento en pantalla debe mostrar un *Skeleton Loader* o el botón correspondiente debe transicionar a un estado de carga con spinner y texto descriptivo.
3.  **Área de Toque Accesible**: Todos los componentes interactivos (enlaces, botones, checkboxes) deben tener un tamaño de objetivo de clic mínimo de **44x44px** en pantalla móvil (`a11y-touch-target`).

### Convención de Ramas y Commits
Para subir cambios a este repositorio, por favor sigue la estructura de commits semánticos:
*   `feat: ...` para nuevas funcionalidades.
*   `fix: ...` para corrección de bugs o lints.
*   `docs: ...` para cambios en la documentación.
*   `style: ...` para actualizaciones visuales o maquetación CSS que no alteren lógica de negocio.

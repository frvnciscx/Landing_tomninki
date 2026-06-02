# Resumen de Skills de IA e Inteligencia de Arquitectura

Durante la elaboración de esta versión B2B Premium para Tomin-Ki, Antigravity (IA) empleó módulos externos modulares de lógica ("Skills"). Estos son manuales y directrices computacionales asimiladas temporalmente para resolver problemas arquitectónicos bajo un paradigma validado por líderes de la industria.

A continuación expongo las funciones de cada Skill instalada en el ecosistema:

## 1. `web-design-guidelines` (Por Vercel Labs)
* **¿Qué hace?**: Inyecta una extensa auditoría mental enfocada en estándares de accesibilidad estricta, prevención de Layout Shifts (carga de UI), jerarquía HTML5 y reglas antipatrones.
* **Impacto en el Proyecto**: Gracias a ella erradicamos etiquetas CSS lentas como `transition-all`, implementé los verdaderos focos por teclado para invidentes (`focus-visible`) que los exploradores prefieren, garantizamos que las gráficas gigantes tuvieran `width` y `height` precalculados y configuramos los formularios atómicos para que tu lector de contraseñas de Google reconozca el Input de email inmediatamente de manera nativa sin fallos.

## 2. `landing-page-copywriter`
* **¿Qué hace?**: Modifica el esquema conversacional de la IA para razonar como un Ingeniero/Mercadólogo experto en Tasa de Conversión (CRO). Entiende los ciclos psicológicos a resolver (Atención → Problema → Solución → Prueba Social → Llamado a la Acción).
* **Impacto en el Proyecto**: Transformó el cascarón de los archivos vacíos de código en un sistema persuasivo de venta real sin que tuvieras que pensar dónde colocar los botones o los features. Nos dijo cómo nombrar los testimonios, cómo acentuar el botón central, qué tipo de encabezado atrapaba y cómo estructurar los "dolores" financieros primero antes que el precio de los planes.

## 3. `vercel-react-best-practices`
* **¿Qué hace?**: Dictamina estrictas reglas de renderizado en el front-end y organización de los repositorios de un producto SaaS; orientando todas las funciones bajo esquemas que soporten `useEffect`, `vite`, entre otras tecnologías sin fugas de memoria.
* **Impacto en el Proyecto**: Aseguró que la distribución de tus `src/components/*` sea altamente modular permitiéndote desacoplarlos cómodamente; por ejemplo, logramos mantener el Toggle de Oscuro/Luminoso en la raíz principal para no contaminar subcomponentes con recargas iterativas indeseadas.

## 4. `heuristic-ux-evaluation` *(Añadida en Sesión 2)*
* **¿Qué hace?**: Provee un framework de evaluación de 48 reglas heurísticas basado en los principios de Nielsen, WCAG 2.1 y estándares de accesibilidad táctil móvil. Genera un checklist auditado por componente.
* **Impacto en el Proyecto**:
  - **Contraste**: Detectó y corrigió 3 componentes con relaciones de contraste insuficientes (`Hero`, `Features`, `Blog/Newsletter`), alcanzando el estándar WCAG AA (≥ 4.5:1).
  - **Flujo de conversión**: Recomendó mover el CTA principal (`PreFooter`) antes de la sección de precios para reducir la fricción de decisión.
  - **Responsividad**: Auditó la navegación en resoluciones `< 1024px`, impulsando la implementación del menú hamburguesa y el sidebar responsive del admin.

---

## 📈 Consejos de Oro para Expandir el Proyecto (Mejora Continua)

Ahora que la arquitectura visual y técnica de Frontend está resuelta. Para convertir tu repositorio de `tomin-ki` alojado localmente en una gran potencia, toma nota de los pasos del horizonte próximo:

1. **Integración Backend:** Todos los *Inputs* (como los que creamos con el ícono de correo para tu lista VIP de Pre-Lanzamiento en `Hero.tsx` y `EarlyAccess.tsx`) deben conectarse. Te aconsejo incrustar una base de datos serverless como Firebase Firestore o utilizar una API simple de *Formspree* para que tu página actualmente en Beta empiece a recolectar correos electrónicos tangibles hacia tu propio Excel mañana mismo.

2. **Componentes "Híbridos" de Vercel / Next.js:** Actualmente estamos rodando en Vite 6 puro cliente. Cuando tu plataforma vaya a albergar los datos logueados de los usuarios o necesites escalar el SEO de la landing globalmente de cara a buscadores (Google), contempla trasladar la compilación hacia Next.js migrando a Arquitectura Servidor (*Server Side Rendering/SSG*). 

3. **Autenticación (Auth0/Clerk):** Actualmente los botones llevan hacia un link `/login` o `/sign-in`. Como un paso final de esta rama paralela implementa Clerk o Supabase Auth. Puedes inyectar la misma lógica CSS estricta para crear tu propio portal cautivo sin la temible burocracia de construir logueos a mano.

4. **Componentización Vía Storybook:** Conforme el proyecto se expanda agregando pantallas de pago, menús, modal de cancelaciones y apartados criptográficos, te recomendamos que aísles la librería de botones primarios y secundarios que creamos bajo un ecosistema "Storybook". Esto previene que se reescriban reglas atómicas y preserva el modo Oscuro universal que dejamos configurado.

5. **Auditoría de Formularios de Auth:** *(Pendiente - Sesión 3)* Los formularios de `/login` y `/sign-up` aún no han sido revisados bajo el estándar WCAG AA. Se recomienda ejecutar el `checklist-template.md` del skill `heuristic-ux-evaluation` sobre esas páginas antes del lanzamiento.


# Changelog

Todas las versiones notables de este proyecto. El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [0.2.0] - 2026-11-07

### Added
- CTA en el Hero: "Ver proyectos" (ancla a `#proyectos`) y "Descargar CV" (`btn btn-ghost`).
- Campos `description` y `demo` en el array `projects`; el componente los renderiza solo cuando tienen valor. Los datos quedan vacíos para completar.

### Changed
- Orden del grid bento: los proyectos pasan a la fila 1 a ancho completo; perfil y stack bajan a las filas 2-3.
- `Hero.jsx`: se quitó "Especializado en" y la sigla críptica "DEV · NETS · JS"; ahora declara rol, stack y despliegue.
- `Skills.jsx`: de 7 grupos y 26 ítems a 4 grupos más dos líneas de cierre ("También he trabajado con", "Soporte de TI").
- `AboutMe.jsx`: badge `Full Stack Junior`, segundo párrafo reescrito y disponibilidad explícita como etapa productiva (prácticas).
- La card de Skills ya no scrollea en desktop (se eliminaron `max-height` y `overflow-y`).
- El enlace de proyecto pasa de "Ver detalles" a "Código", que es lo que realmente abre.

### Fixed
- `Inglés intermedio (A2)` → `Inglés básico (A2)`: A2 es básico en el marco CEFR, no intermedio.
- El footer tenía `2024` fijo; ahora usa `new Date().getFullYear()`.
- `Interfaces graficas` → `Interfaces gráficas con Java Swing`.
- Chips normalizados (`Next.JS` → `Next.js`, `ESLint+Node` → `ESLint + Node`) y se quitó "Agentes IA", que no describe tecnología.

## [0.1.1] - 2026-11-07

### Removed
- `design/` (design system y mockups), `.opencode/` (configuración de agentes) y `agents.md`. El repositorio queda solo con el código del sitio, la documentación y la configuración de build.
- Referencias a esos directorios en `README.md` y en el comentario de cabecera de `src/index.css`.

## [0.1.0] - 2026-11-07

### Added
- Enlace "Descargar CV" en `src/components/Contact.jsx`, apuntando a `public/pdf/Curriculum Maicol Avila.pdf`.
- `CHANGELOG.md` con el historial del proyecto.
- Metadatos en `index.html`: `lang="es"`, `meta description`, `theme-color` y título del documento.

### Changed
- `src/App.jsx` deja de importar `App.css` y solo renderiza `Portfolio`.
- Grid bento de `src/index.css` pasa de 5 a 4 filas: `.projects` ocupa una sola fila y `.contact`/`.footer` se mueven a la fila 4, eliminando el hueco vacío de la card de proyectos.
- LinkedIn alineado al perfil vigente (`maicol-ávila-developer-junior`) en `README.md`, `public/ai-catalog.json` y `public/llms.txt`.
- `design/system.md` y `design/system.html` reescritos a partir de los tokens reales de `src/index.css`; el mockup pasa a `design/tecnologico/`.
- `README.md` y `agents.md` alineados con el código: árbol de carpetas, tabla de proyectos, requisitos de Node 26 y rutas de personalización.

### Fixed
- Comentario CSS sin cerrar en `src/index.css` que desactivaba el bloque responsive y el de `prefers-reduced-motion`.
- Especificidad del layout responsive: `.tech-grid > .about` ganaba sobre `.about`, dejando el grid en 4 columnas en móvil.
- Scroll interno recortado de `.skills` en móvil (`max-height`/`overflow` reseteados).
- Texto "Pongamonos" → "Pongámonos" en `Contact.jsx`.
- Tecnología `' Swing'` → `'Swing'` en `src/components/Projects.jsx`.
- `design/tecnologico/design.json` describía artboards inexistentes y una dirección visual que no coincidía con el CSS.

### Removed
- `src/App.css`, cuyos estilos de `#root` (`max-width`, `text-align: center`) rompían el diseño.
- Dependencias `express` y `nodemailer`, sin uso en `src/`.
- `src/assets/react.svg`, `public/vite.svg` y los directorios vacíos `src/assets/`.
- Regla muerta `scroll-margin-top` para `article[id]`/`section[id]`, sin anclas en la UI.

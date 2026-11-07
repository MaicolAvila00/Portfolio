# Changelog

Todas las versiones notables de este proyecto. El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

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

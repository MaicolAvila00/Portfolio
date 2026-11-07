# Design System — Portfolio Maicol Avila

Sincronizado desde `src/index.css` (única fuente de estilos del proyecto) y `design/tecnologico/tecnologico.html` (mockup del que salió ese CSS).

Dirección de diseño: **tecnológico** — fondo oscuro, acento cian neón, tipografía system-ui y datos técnicos en monospace.

> Este documento se deriva del código. Si cambia `src/index.css`, actualizar aquí. No inventar tokens que no existan en el CSS.

## Colores

| Token | Valor | Uso | Fuente |
|-------|-------|-----|--------|
| `--bg` | `#0A0F1C` | Fondo general (`body`) | `src/index.css :root` |
| `--surface` | `#121A2B` | Fondo de secciones, cards y `.tag` | `src/index.css :root` |
| `--surface-hover` | `#172136` | Declarado pero **sin uso** en el CSS actual | `src/index.css :root` |
| `--text` | `#FFFFFF` | Texto principal, títulos, `.lead` | `src/index.css :root` |
| `--text-dim` | `#CBD5E1` | Párrafos y `.hero-sub` | `src/index.css :root` |
| `--text-muted` | `#64748B` | Datos secundarios, footer, socials | `src/index.css :root` |
| `--primary` | `#2D7D87` | Gradientes (avatar, thumb, línea hover) | `src/index.css :root` |
| `--secondary` | `#00E5FF` | Acento principal: h2, chips, links, hover | `src/index.css :root` |
| `--accent` | `#FD79A8` | CTAs: `.btn`, `.email-chip`, `.tel-chip` | `src/index.css :root` |
| `--border` | `rgba(0, 229, 255, 0.35)` | Bordes de cards y línea base de h2 | `src/index.css :root` |

Colores sueltos (no son tokens): texto sobre acento `#050810`, hover del botón `#fd9ec2`, y capas `rgba(0, 229, 255, …)` / `rgba(45, 125, 135, …)` / `rgba(253, 121, 168, …)` para fondos, bordes y sombras.

## Tipografía

| Rol | Valor | Fuente |
|-----|-------|--------|
| Cuerpo | `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`, `16px`, `line-height: 1.7` | `body` |
| Técnico / datos | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` | `.tag`, `.role-badge`, `.skill-group h4`, `.skill-list li`, `.project-tech span`, `.project-link`, `.email-chip`, `.tel-chip`, `.btn`, `.socials a` |
| `h1` | `2.6rem`, `800`, `letter-spacing: -0.5px` | `header h1` |
| `h2` | `1.4rem`, color `--secondary`, `border-bottom: 2px solid --border` | `h2` |
| `h3` | `1.05rem`, `700` | `h3` |
| `h4` | `0.85rem`, uppercase, `letter-spacing: 0.05em` | `.skill-group h4` |
| `p` | `0.95rem`, color `--text-dim` | `p` |
| `.lead` | `1.05rem`, `500`, color `--text` | `.lead` |

No se usan fuentes externas ni CDNs: solo system fonts.

## Layout

- `body`: `padding: 40px`
- Contenedor `.wrap`: `max-width: 1200px`, `margin: 0 auto`
- Grid principal `.tech-grid`: `repeat(4, 1fr)`, filas `repeat(4, minmax(260px, auto))`, `gap: var(--gap)` = `24px`
- Distribución de secciones:

| Sección | Columnas | Filas |
|---------|----------|-------|
| `.about` | `1 / span 2` | `1 / span 2` |
| `.skills` | `3 / span 2` | `1 / span 2` (con `max-height: 520px` y scroll interno) |
| `.projects` | `1 / span 4` | `3` |
| `.contact` | `1 / span 2` | `4` |
| `.footer` | `3 / span 2` | `4` |

- Grid de proyectos `.project-grid`: `repeat(auto-fit, minmax(240px, 1fr))`, `gap: 18px`
- Grid de skills `.skill-list`: `repeat(2, 1fr)`, `gap: 8px`
- Responsive: `@media (max-width: 768px)` colapsa `.tech-grid` a `1fr`, reinicia `grid-column`/`grid-row` de cada sección y quita el `max-height`/scroll interno de `.skills`; `h1` baja a `2rem`. Los overrides usan `.tech-grid > .seccion` para ganarle a la especificidad de la distribución base.

## Radios y sombras

| Token / valor | Uso |
|---------------|-----|
| `--radius` = `10px` | Secciones (`.tech-grid > article`), `.project-card` |
| `--radius-sm` = `6px` | `.tag`, `.skill-list li` |
| `4px` | `.project-tech span` |
| `24px` / `30px` / `32px` | `.role-badge` / `.tel-chip` / `.email-chip` y `.btn` |
| `50%` | `.about-avatar` |
| `--shadow` = `0 12px 36px rgba(0, 0, 0, 0.5)` | Hover de secciones |
| `0 8px 20px rgba(45, 125, 135, 0.45)` | Avatar |
| `0 10px 24px` / `0 12px 28px rgba(253, 121, 168, …)` | Botones y chips de contacto |

## Movimiento

- Transiciones de `0.2s` a `0.3s` con `ease`.
- Secciones: hover eleva `translateY(-5px)`, cambia el borde a `--secondary` y muestra la línea superior degradada (`::before`, `linear-gradient(90deg, var(--secondary), var(--primary))`).
- Project cards: hover eleva `translateY(-4px)`.
- Skills: hover desplaza `translateX(4px)`.
- `@media (prefers-reduced-motion: reduce)` anula animaciones, transiciones y los `transform` de hover.

## Accesibilidad

- `.btn:focus-visible`, `a:focus-visible`, `.skill-list li:focus-visible`: `outline: 3px solid var(--secondary)` con `outline-offset: 3px`.

## Reglas de componente

- Header: no es fijo. `display: flex`, `flex-direction: column`, `align-items: flex-start`.
- Secciones: `article` dentro de `.tech-grid` con fondo `--surface`, borde `--border`, `padding: 22px` y `overflow: hidden`.
- Skills: agrupadas en `.skill-group` (`h4` + `ul.skill-list`), renderizadas como chips monospace.
- Project cards: `.project-thumb` es un bloque de `140px` con degradado y el título en mayúsculas (sin imágenes); debajo `.project-body` con `.project-title`, `.project-tech` y `.project-link`.
- Contacto: `.contact-card` centrado, con `.email-chip`, `.tel-chip`, `.btn` y `.socials`.
- Footer: `.footer-card` centrado con borde superior.
- No hay texto centrado global: solo `.contact-card` y `.footer-card` lo declaran.

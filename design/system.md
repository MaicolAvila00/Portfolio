# Design System — Portfolio Maicol Avila

Sincronizado desde `src/index.css` (única fuente de estilos del proyecto). Se registran solo los valores que ya existen en el código.

## Colores

| Token | Valor | Uso | Fuente |
|-------|-------|-----|--------|
| `--primary-color` | #2D7D87 | Header, footer | `src/index.css :root` |
| `--secondary-color` | #00CEC9 | Acentos, hover, bordes | `src/index.css :root` |
| `--accent-color` | #FD79A8 | Botones, CTAs | `src/index.css :root` |
| `--background-color` | #2E565C | Fondo general | `src/index.css :root` |
| `--text-color` | #2D3436 | Texto principal | `src/index.css :root` |
| `--card-background` | #323B3C | Fondo de secciones y cards | `src/index.css :root` |

## Tipografía

| Token | Valor | Uso | Fuente |
|-------|-------|-----|--------|
| `font-family` | 'Poppins', sans-serif | Cuerpo general | `src/index.css body` |
| `line-height` | 1.6 | Legibilidad | `src/index.css body` |

## Espaciado y layout

- Contenedor `.portfolio`: `max-width: 700px`, `margin: 0 auto`, `padding: 20px`
- Header: `position: fixed`, `top: 1px`, `width: 52%`, `max-width: 52%`, centrado con `transform: translateX(-50%)`
- Secciones: `margin: 95px 0`, `padding: 20px`, `border-radius: 15px`
- Grid proyectos: `repeat(auto-fit, minmax(280px, 1fr))`, `gap: 30px`

## Radios y sombras

- `border-radius: 15px` — secciones, cards, esquinas del footer
- `border-radius: 25px` — chips de skills, botones
- `border-radius: 8px` — inputs, imágenes de proyecto
- `box-shadow: 0 10px 20px rgba(0,0,0,0.1)` — secciones
- `box-shadow: 0 5px 15px ...` — cards de proyectos

## Reglas de componente

- Header fijo centrado con navegación ancla (`#about`, `#projects`, `#contact`)
- Secciones con efecto hover lift (`translateY`)
- Skills renderizadas como chips y pills
- Project cards con imagen fija de 12rem y overlay de título
- Contacto con `.form-group`, inputs al 100%, botón redondeado

# AGENTS.md — Portfolio Maicol Avila

Guía de trabajo del proyecto: cómo trabajar y qué está ya implementado. El estado más reciente está en la última entrada de `CHANGELOG.md`. Los cambios sustanciales generan un documento de seguimiento en `odd/tasks/`; los cambios pequeños y bien entendidos se implementan directo.

## Reglas

Lee este archivo completo antes de tocar código. Para cambios grandes, explora el código relevante y confirma el alcance antes de implementar.

## 1. Qué es

Portafolio profesional de una sola página para Maicol Avila (desarrollador junior full stack, Bogotá). Presenta perfil, stack técnico, proyectos y contacto. Es un sitio 100% estático de frontend: no tiene backend, API, base de datos ni autenticación. Las dependencias se limitan a `react` y `react-dom`; no asumas que existe un servidor.

Stack: React 18 + Vite 5 (plugin `@vitejs/plugin-react-swc`), JavaScript/JSX sin TypeScript, CSS plano en un único `src/index.css` · `npm run dev` (5173), `npm run build` (→ `dist/`), `npm run preview`, `npm run lint`. Node >= 26 (`.nvmrc`: v26.13.0).

## 2. Mapa del proyecto

| Carpeta | Qué va ahí |
|---|---|
| `/src` | Código de la app: `main.jsx` (entrada), `App.jsx`, `Portfolio.jsx` (layout bento que compone las secciones), `AboutMe.jsx`, `index.css` (todos los estilos) y `components/` (`Hero`, `Skills`, `Projects`, `Contact`, `Footer`). |
| `/public` | Archivos servidos tal cual: `pdf/Curriculum Maicol Avila.pdf`, `llms.txt`, `ai-catalog.json`, `robots.txt`. |
| `/design` | Referencias de diseño: `system.md` (design system sincronizado con `index.css`), `system.html` (artboard visual) y `tecnologico/` (`tecnologico.html`, mockup del que salió el CSS actual, y `design.json`). |
| `/.opencode` | Configuración de agentes: `opencode.json` (MCP context7 + chrome-devtools) y `agents/` (`orquestador.md`, `ejecutor.md`). |
| `/.atl` | `skill-registry.md` generado por gentle-ai. No editar a mano. |
| `/dist` | Salida del build. Generado, no se edita. |
| `/odd` | Documentos de seguimiento de tareas sustanciales, creados por el agente bajo ODD. No editar a mano salvo que el agente lo pida. |

**Rutas/entradas permitidas:** `index.html` es el único HTML fuente; todo el contenido vive en componentes de `src/`. No crear páginas ni rutas nuevas ni instalar un router: es una sola vista sin barra de navegación.

## 3. Tareas frecuentes

**Agregar o editar un proyecto del portafolio**
1. Edita el array `projects` en `src/components/Projects.jsx` (`title`, `tech[]`, `link`).
2. `title` es la `key` del `map`: debe ser único.
3. Verificación: `npm run lint` y `npm run build`.

**Actualizar el stack técnico**
1. Edita los grupos y `<li>` en `src/components/Skills.jsx`.
2. Si agregas un grupo, sigue la estructura `.skill-group` > `h4` + `ul.skill-list`.
3. Verificación: `npm run lint`.

**Cambiar contacto o redes**
1. Email, teléfono y URLs están como constantes dentro de `src/components/Contact.jsx`.
2. Si cambia el email, actualízalo también en `public/ai-catalog.json` y `public/llms.txt`.
3. Verificación: `npm run dev` y probar el botón "Copiar correo" (usa `navigator.clipboard`).
4. El CV se descarga desde `public/pdf/Curriculum Maicol Avila.pdf`; el `href` está en `Contact.jsx` (URL con `%20` por los espacios del nombre).

**Tocar estilos o layout**
1. `src/index.css` es la única hoja de estilos: tokens en `:root`, layout bento, responsive en `@media (max-width: 768px)`. No crear hojas nuevas.
2. Si cambian tokens o layout, actualizar `design/system.md` y `design/system.html`, que se derivan de ese CSS.
3. Verificación: `npm run build` y revisar en `npm run preview`.

## 4. Contratos de datos

No hay backend ni esquemas de datos. El único contrato de datos es el array `projects` de `src/components/Projects.jsx`:

```js
{ title: string, tech: string[], link: string }
```

- `title`: obligatorio, único (se usa como `key`). También alimenta el texto del thumbnail (`project-thumb`), que toma las 3 primeras palabras en mayúsculas.
- `tech`: array de strings, se renderiza como chips.
- `link`: URL absoluta abierta en pestaña nueva con `rel="noopener noreferrer"`.

`public/ai-catalog.json` y `public/llms.txt` duplican datos de contacto y proyectos con otro formato; si cambias contacto o proyectos, considéralos para mantener coherencia.

## 5. Convenciones de código

- Componentes funcionales con arrow function y `export default` al final del archivo. Sin clases, sin TypeScript, sin prop-types.
- Archivos de componentes en PascalCase (`Hero.jsx`); el resto en camelCase. No hay index barrel files.
- Imports: `Portfolio.jsx` importa sin extensión (`./components/Hero`); `main.jsx`/`App.jsx` usan `.jsx`. Mantener el estilo del archivo que se modifica.
- CSS plano, sin módulos ni Tailwind ni CSS-in-JS. Clases kebab-case reutilizando las existentes (`.tech-grid`, `.project-card`, `.skill-list`). Tokens en `:root` de `src/index.css`: `--bg #0A0F1C`, `--surface #121A2B`, `--secondary #00E5FF`, `--accent #FD79A8`, `--primary #2D7D87`, `--radius 10px`.
- `design/system.md` y `design/system.html` se derivan de `src/index.css`. Si se cambian tokens o layout, actualizar ambos; la fuente de verdad siempre es `index.css` (diseño "02-tecnologico", oscuro con acento cian).
- Copy de UI en español; identificadores, comentarios y nombres de archivo en inglés. No mezclar.
- Prohibido: agregar dependencias, router, estado global o backend sin aprobación explícita.

## 6. Definición de "Hecho"

Una tarea no se reporta como terminada hasta que:
1. `npm run lint` y `npm run build` pasan sin errores nuevos. (No hay tests: el proyecto no tiene runner configurado; decirlo explícitamente en el reporte.)
2. Si cambió una ruta, un schema o un contrato de componente: este archivo está actualizado.
3. `CHANGELOG.md` tiene una entrada nueva. Si algún punto no aplica, se dice explícitamente.

## 7. Agentes (`.opencode/agents/`)

- `@orquestador`: agente primario; planifica, divide en paquetes atómicos y delega. No escribe código (sin `write`/`edit`/`bash`). Modelo: `opencode/deepseek-v4.1-flash-free`.
- `@ejecutor`: subagente que aplica paquetes ya especificados; no decide diseño. Corre en paralelo con otras instancias. Modelo: `openrouter/cohere/north-mini-code:free`.

`@arquitecto` y `@frontend` se mencionan en el prompt del orquestador como autoridades con veto, pero **no existen como archivos de agente**: hoy no hay a quién invocar. Si el flujo los requiere, hay que crearlos en `.opencode/agents/` o el orquestador debe resolver sin ellos.

## 8. Formato de CHANGELOG.md

Entradas de más reciente a más antigua:

```md
## [X.Y.Z] - YYYY-MM-DD
### Added / Changed / Fixed
- Qué cambió y en qué archivos
```

Versiones: `PATCH` = fix o estilo menor · `MINOR` = funcionalidad nueva retrocompatible · `MAJOR` = rompe un contrato existente.

## 9. Modo de trabajo con el agente

Antes de escribir o modificar cualquier código — sin importar si la tarea parece pequeña — el agente debe:

1. Resumir en 2-4 líneas qué entendió que se pide.
2. Proponer el enfoque: qué archivos tocaría, qué contratos o componentes afecta, y cualquier trade-off relevante.
3. Si la idea es vaga o hay más de un camino razonable, presentar 2-3 alternativas concretas (con nombre corto cada una) en vez de elegir una por su cuenta.
4. Esperar confirmación explícita ("sí", "adelante", "ve con la opción 2", "impleméntalo") antes de tocar código.

**Excepciones** (no requieren este paso):
- Typos o copy ya aprobado explícitamente en la misma conversación.
- Cuando el usuario ya dio luz verde para todo el flujo de una tarea de principio a fin.

**Para ideas vagas** ("quiero algo para X", "sería bueno si Y"):
No asumas el alcance. Haz como máximo 2-3 preguntas de aclaración, o presenta directamente 2-3 propuestas concretas derivadas de la idea para que el usuario elija — nunca implementes la primera interpretación posible sin confirmar.
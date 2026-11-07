# Portafolio Personal | React + Vite

Mi portafolio profesional como desarrollador junior: una página de una sola vista, hecha con **React 18** y **Vite**, donde presento quién soy, mis habilidades, mis proyectos desplegados y las formas de contactarme.

**Demo en vivo:** [portofoliov1-maicol-avilas-projects.vercel.app](https://portofoliov1-maicol-avilas-projects.vercel.app)


## Secciones

| Sección | Contenido |
|---|---|
| **About Me** | Presentación, badge de rol (Full Stack Junior), datos rápidos y stack organizado por categoría en chips. |
| **Projects** | Tarjetas con miniatura tipográfica (sin imagen) que enlazan a cada repositorio. |
| **Contact** | Email y teléfono visibles, botón para copiar el correo, enlaces a LinkedIn y GitHub, y descarga del CV en PDF. |

El sitio es una sola vista que se recorre con scroll: no hay router ni barra de navegación. El encabezado muestra el nombre y el rol.

## Proyectos destacados

La fuente de verdad es el array `projects` de `src/components/Projects.jsx`.

| Proyecto | Tecnologías | Enlace |
|---|---|---|
| Sistema de Login Full Stack | React, Vite, Node.js, Express, SQLite | [Ver código](https://github.com/MaicolAvila00/LoginProyect) |
| Interfaces gráficas Java Swing | Java, Swing, NetBeans | [Ver código](https://github.com/MaicolAvila00/Interfaces---Logica) |
| Web BikePark | Next.js, CSS modular, React 18, Node, agentes IA | [Ver código](https://github.com/MaicolAvila00/bikepark-website-deploy) |
| Gestión lista de personas | React, TypeScript, Vite | [Ver código](https://github.com/MaicolAvila00/ListCards) |

## Tecnologías

- **Biblioteca de interfaz:** React 18 (componentes funcionales y hooks)
- **Herramienta de build:** Vite 5 con `@vitejs/plugin-react-swc`
- **Estilos:** CSS
- **Calidad de código:** ESLint 9 con los plugins de React, React Hooks y React Refresh
- **Despliegue:** Vercel

## Estructura del proyecto

```
Proyect-2/
├── public/                     # Servido tal cual
│   ├── pdf/                    # Hoja de vida descargable
│   ├── ai-catalog.json
│   ├── llms.txt
│   └── robots.txt
├── src/
│   ├── AboutMe.jsx             # Presentación, badge de rol y datos rápidos
│   ├── Portfolio.jsx           # Grid bento que compone las secciones
│   ├── components/
│   │   ├── Hero.jsx            # Nombre y rol
│   │   ├── Skills.jsx          # Stack agrupado en chips
│   │   ├── Projects.jsx        # Tarjetas de proyectos (array `projects`)
│   │   ├── Contact.jsx         # Email, teléfono, copiar correo, redes y CV
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Única hoja de estilos
├── index.html
├── vite.config.js
├── eslint.config.js
├── CHANGELOG.md                # Historial de versiones
└── package.json
```

## Cómo ejecutarlo en local

**Requisitos:** Node.js 26 o superior y npm (ver `.nvmrc` y el campo `engines` de `package.json`).

```bash
# 1. Clonar el repositorio
git clone https://github.com/MaicolAvila00/Proyect-.git
cd Proyect-

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre la dirección que muestra la terminal (normalmente `http://localhost:5173`).

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión de producción. |
| `npm run lint` | Revisa el código con ESLint. |

## Despliegue

El proyecto se despliega en **Vercel** conectando el repositorio de GitHub. Vercel detecta Vite automáticamente (comando de build `npm run build`, carpeta de salida `dist`), y cada `push` a la rama principal publica una nueva versión.

## Cómo personalizarlo

- **Proyectos:** edita el array `projects` en `src/components/Projects.jsx` (`title`, `tech[]`, `link`). `title` debe ser único porque se usa como `key` y como texto de la miniatura.
- **Habilidades y presentación:** modifica los grupos y textos en `src/components/Skills.jsx` y `src/AboutMe.jsx`.
- **Contacto:** actualiza email, teléfono y enlaces en `src/components/Contact.jsx`.
- **CV:** reemplaza `public/pdf/Curriculum Maicol Avila.pdf`; si cambia el nombre, actualiza el `href` del enlace de descarga en `Contact.jsx`.
- **Estilos:** el diseño vive en `src/index.css`; los tokens están en `:root`.


## Autor

**Maicol Ávila**, Desarrollador Junior Full Stack

- GitHub: [MaicolAvila00](https://github.com/MaicolAvila00)
- LinkedIn: [maicol-ávila-developer-junior](https://www.linkedin.com/in/maicol%C3%A1vila-developer-junior/)
- Portafolio: [portofoliov1-maicol-avilas-projects.vercel.app](https://portofoliov1-maicol-avilas-projects.vercel.app)

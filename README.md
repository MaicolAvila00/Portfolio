# Portafolio Personal | React + Vite

Mi portafolio profesional como desarrollador junior: una página de una sola vista, hecha con **React 18** y **Vite**, donde presento quién soy, mis habilidades, mis proyectos desplegados y las formas de contactarme.

**Demo en vivo:** [portofoliov1-maicol-avilas-projects.vercel.app](https://portofoliov1-maicol-avilas-projects.vercel.app)


## Secciones

| Sección | Contenido |
|---|---|
| **About Me** | Presentación, objetivos profesionales y habilidades organizadas por categoría: Frontend, Backend, Bases de datos y otras competencias (Git, Scrum, diseño responsive, accesibilidad). |
| **Projects** | Tarjetas con imagen que enlazan a cada proyecto desplegado. |
| **Contact** | Botón para copiar el correo, enlaces a LinkedIn y GitHub, y descarga de la hoja de vida en PDF. |

La navegación del encabezado desplaza la página a cada sección mediante anclas (`#about`, `#projects`, `#contact`).

## Proyectos destacados

| Proyecto | Tecnologías | Enlace |
|---|---|---|
| Twitter Users Cards Following | React, JavaScript, SWC | [Ver demo](https://twitter-cards-nine.vercel.app/) |
| Tic Tac Toe | React | [Ver demo](https://game-topaz-gamma.vercel.app/) |
| Lista de personas con base de datos | React, TypeScript | [Ver demo](https://types-tau.vercel.app/) |
| Este portafolio | React, Vite | [Ver código](https://github.com/MaicolAvila00/Portofolio_versions) |

## Tecnologías

- **Biblioteca de interfaz:** React 18 (componentes funcionales y hooks)
- **Herramienta de build:** Vite 5 con `@vitejs/plugin-react-swc`
- **Estilos:** CSS
- **Calidad de código:** ESLint 9 con los plugins de React, React Hooks y React Refresh
- **Despliegue:** Vercel

## Estructura del proyecto

```
Portfolio/
├── public/
│   └── pdf/                    # Hoja de vida descargable
├── src/
│   ├── assets/img/             # Imágenes de los proyectos
│   ├── AboutMe.jsx             # Presentación y habilidades
│   ├── Projects.jsx            # Tarjetas de proyectos
│   ├── Contact.jsx             # Contacto, redes y descarga del CV
│   ├── Portfolio.jsx           # Encabezado, navegación y secciones
│   ├── App.jsx
│   ├── main.jsx                # Punto de entrada
│   ├── App.css
│   └── index.css
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Cómo ejecutarlo en local

**Requisitos:** Node.js 18 o superior y npm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/MaicolAvila00/Portfolio.git
cd Portfolio

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

- **Proyectos:** edita la lista `projects` en `src/Projects.jsx` (título, imagen y enlace) y guarda la imagen en `src/assets/img/`.
- **Habilidades y presentación:** modifica los textos y listas en `src/AboutMe.jsx`.
- **Contacto y CV:** actualiza los enlaces en `src/Contact.jsx` y reemplaza el PDF en `public/pdf/`.


## Autor

**Maicol Ávila**, Desarrollador Junior Full Stack

- GitHub: [MaicolAvila00](https://github.com/MaicolAvila00)
- LinkedIn: [maicol-avila-032503210](https://linkedin.com/in/maicol-avila-032503210)
- Portafolio: [portofoliov1-maicol-avilas-projects.vercel.app](https://portofoliov1-maicol-avilas-projects.vercel.app)

const projects = [
  {
    title: 'Sistema de Login Full Stack',
    description: 'Aplicación full stack para autenticación y gestión de usuarios. Frontend con React + Vite, backend Node.js/Express y base de datos SQLite. Desplegado en Vercel con API REST y control de sesiones.',
    demo: 'https://loggin-usuarios.vercel.app/login',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'SQLite'],
    link: 'https://github.com/MaicolAvila00/LoginProyect'
  },
  {
    title: 'Interfaces gráficas con Java Swing',
    description: 'Aplicación de escritorio en Java para gestión de interfaces gráficas usando Swing y NetBeans. Práctica de programación orientada a objetos y manejo de eventos en entorno desktop."',
    demo: '',
    tech: ['Java', 'Swing', 'NetBeans'],
    link: 'https://github.com/MaicolAvila00/Interfaces---Logica'
  },
  {
    title: 'Web BikePark',
    description: 'Sitio web institucional con Next.js y React 18, estilos modulares y configuración ESLint + Node. Proyecto para practicar renderizado y optimización de assets.',
    demo: 'https://bikepark-website.vercel.app',
    tech: ['Next.js', 'CSS modular', 'React 18', 'ESLint + Node'],
    link: 'https://github.com/MaicolAvila00/bikepark-website-deploy'
  },
  {
    title: 'Gestión lista de personas',
    description: 'Interfaz web para lista de_contacto usando React y TypeScript. Consumo de datos locales y despliegue en Vercel. Práctica de componentes funcionales y TypeScript tipado.',
    demo: 'https://types-odrnfmp6x-maicol-avilas-projects.vercel.app',
    tech: ['React', 'TypeScript', 'Vite'],
    link: 'https://github.com/MaicolAvila00/ListCards'
  }
];

const Projects = () => {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div className="project-card" key={project.title}>
          <div className="project-thumb">{project.title.toUpperCase().split(' ').slice(0, 3).join(' ')}</div>
          <div className="project-body">
            <div className="project-title">{project.title}</div>
            {project.description && <p className="project-desc">{project.description}</p>}
            <div className="project-tech">
              {project.tech.map((t) => <span key={t}>{t}</span>)}
            </div>
            <div className="project-links">
              {project.demo && (
                <a className="project-link" href={project.demo} target="_blank" rel="noopener noreferrer">
                  Demo &rarr;
                </a>
              )}
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                Código &rarr;
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

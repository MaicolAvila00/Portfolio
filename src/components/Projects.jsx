const projects = [
  {
    title: 'Sistema de Login Full Stack',
    description: '',
    demo: '',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'SQLite'],
    link: 'https://github.com/MaicolAvila00/LoginProyect'
  },
  {
    title: 'Interfaces gráficas con Java Swing',
    description: '',
    demo: '',
    tech: ['Java', 'Swing', 'NetBeans'],
    link: 'https://github.com/MaicolAvila00/Interfaces---Logica'
  },
  {
    title: 'Web BikePark',
    description: '',
    demo: '',
    tech: ['Next.js', 'CSS modular', 'React 18', 'ESLint + Node'],
    link: 'https://github.com/MaicolAvila00/bikepark-website-deploy'
  },
  {
    title: 'Gestión lista de personas',
    description: '',
    demo: '',
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

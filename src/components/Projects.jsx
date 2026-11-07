const projects = [
  {
    title: 'Sistema de Login Full Stack',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'SQLite'],
    link: 'https://github.com/MaicolAvila00/LoginProyect'
  },
  {
    title: 'Interfaces graficas Java Swing',
    tech: ['Java', 'Swing', 'NetBeans'],
    link: 'https://github.com/MaicolAvila00/Interfaces---Logica'
  },
  {
    title: 'Web BikePark',
    tech: ['Next.JS', 'CSS modular', 'React 18' , 'ESLint+Node', 'Agentes IA'],
    link: 'https://github.com/MaicolAvila00/bikepark-website-deploy'
  },
  {
    title: 'Gestión lista de personas',
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
            <div className="project-tech">
              {project.tech.map((t) => <span key={t}>{t}</span>)}
            </div>
            <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              Ver detalles &rarr;
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

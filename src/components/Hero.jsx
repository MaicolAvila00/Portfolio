const Hero = () => {
  return (
    <header>
      <div className="hero-top">
        <h1>Maicol Avila</h1>
        <span className="tag">FULL STACK · JUNIOR</span>
      </div>
      <p className="hero-sub">
        <span className="important">Desarrollador Junior Full Stack</span> · Bogotá. Construyo aplicaciones web con{' '}
        <span className="important">React</span>, <span className="important">Node.js</span> y{' '}
        <span className="important">SQL</span>, y despliego proyectos en Vercel y Render.
      </p>
      <div className="hero-actions">
        <a className="btn" href="#proyectos">Ver proyectos</a>
        <a
          className="btn btn-ghost"
          href="/pdf/Curriculum%20Maicol%20Avila.pdf"
          download="Curriculum Maicol Avila.pdf"
        >
          Descargar CV
        </a>
      </div>
    </header>
  );
};

export default Hero;

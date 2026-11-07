const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-avatar">MA</div>
      <div className="role-badge">Full Stack · Soporte TI</div>
      <h2>Perfil profesional</h2>
      <p className="lead">
        Estudiante de Ingeniería de Sistemas (4.º semestre, Universidad La CUN) y Técnico Laboral en Auxiliar en
        Asistencia y Soporte de TI (Universitaria de Colombia).
      </p>
      <p>
        Busco etapa productiva como Desarrollador Junior o Analista de Soporte. He construido aplicaciones web y
        móviles de punta a punta, incluyendo una app full stack con React, API REST en Node.js/Express y SQLite,
        desplegada en Vercel y Render, y una app Android con autenticación en Firebase.
      </p>
      <div className="quick-data">
        <p><span className="important">Disponibilidad:</span> Inmediata para etapa productiva presencial o híbrida en Bogotá.</p>
        <p><span className="important">Idiomas:</span> Español nativo · Inglés intermedio (A2)</p>
      </div>
    </div>
  );
};

export default AboutMe;

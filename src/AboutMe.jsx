const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-avatar">MA</div>
      <div className="role-badge">Full Stack Junior</div>
      <h2>Perfil profesional</h2>
      <p className="lead">
        Estudiante de Ingeniería que aplica asistentes de IA en el desarrollo full stack. (4.º semestre, Universidad La CUN) y Técnico Laboral en Asistencia y
        Soporte de TI (Universitaria de Colombia).
      </p>
      <p>
        Construí una aplicación full stack con React, API REST en Node.js/Express y SQLite, y este portafolio con
        React y Vite. Me interesa el desarrollo web de punta a punta: interfaz, API y base de datos.
      </p>
      <div className="quick-data">
        <p><span className="important">Buscando:</span> etapa productiva (prácticas) como Desarrollador Junior.</p>
        <p><span className="important">Disponibilidad:</span> inmediata, presencial o híbrida en Bogotá.</p>
        <p><span className="important">Idiomas:</span> Español nativo · Inglés básico (A2)</p>
      </div>
    </div>
  );
};

export default AboutMe;

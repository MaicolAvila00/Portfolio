const Skills = () => {
  return (
    <div className="skills">
      <h2>Stack técnico</h2>
      <div className="skill-group">
        <h4>Lenguajes</h4>
        <ul className="skill-list">
          <li>Java</li>
          <li>JavaScript</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="skill-group">
        <h4>Frontend</h4>
        <ul className="skill-list">
          <li>React</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </div>
      <div className="skill-group">
        <h4>Backend y datos</h4>
        <ul className="skill-list">
          <li>Node.js/Express</li>
          <li>MySQL</li>
          <li>SQLite</li>
          <li>Firebase</li>
        </ul>
      </div>
      <div className="skill-group">
        <h4>Herramientas</h4>
        <ul className="skill-list">
          <li>Git / GitHub</li>
          <li>Vercel</li>
          <li>Render</li>
          <li>Android Studio</li>
        </ul>
      </div>
      <p className="skill-note">
        <span className="important">También he trabajado con:</span> PHP, Oracle, C#/.NET, Python y C++.
      </p>
      <p className="skill-note">
        <span className="important">Soporte de TI:</span> redes, Windows y Linux.
      </p>
    </div>
  );
};

export default Skills;

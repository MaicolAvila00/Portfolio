const Contact = () => {
  const email = 'maicol4vila00@gmail.com';
  const phone = '304 308 9701';
  const linkedInUrl = 'https://www.linkedin.com/in/maicol%C3%A1vila-developer-junior/';
  const gitHubUrl = 'https://github.com/MaicolAvila00';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).catch(() => {});
  };

  return (
    <div className="contact-card">
      <div className="email-chip">✉ {email}</div>
      <div className="tel-chip">📞 {phone}</div>
      <p>Pongámonos en contacto.</p>
      <button className="btn" onClick={handleCopyEmail}>Copiar correo</button>
      <div className="socials">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
        <a href="/pdf/Curriculum%20Maicol%20Avila.pdf" download="Curriculum Maicol Avila.pdf">Descargar CV</a>
      </div>
    </div>
  );
};

export default Contact;

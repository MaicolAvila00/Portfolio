const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-card">
      &copy; {year} Maicol Avila. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;

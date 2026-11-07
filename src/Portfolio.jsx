import Hero from './components/Hero';
import AboutMe from './AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Portfolio = () => {
  return (
    <div className="wrap">
      <Hero />

      <div className="tech-grid">
        <article className="about">
          <AboutMe />
        </article>
        <article className="skills">
          <Skills />
        </article>
        <article className="projects">
          <Projects />
        </article>
        <article className="contact contact-card">
          <Contact />
        </article>
        <article className="footer">
          <Footer />
        </article>
      </div>
    </div>
  );
};

export default Portfolio;

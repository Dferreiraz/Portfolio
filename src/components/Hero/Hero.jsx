import Button from '../UI/Button/Button';
import { scrollToSection } from '../../utils/scrollToSection';
import './Hero.css';

function Hero() {
  function handleClick(e, id) {
    e.preventDefault();
    scrollToSection(id);
  }

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="glow glow-top"></div>
        <div className="glow glow-bottom"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title fade-in">Davi Ferreira</h1>
        <p className="hero-subtitle fade-in delay-1">Desenvolvedor Front-End</p>
        <p className="hero-description fade-in delay-2">
          Ajudo empresas a construir presença online com sites modernos e funcionais.
        </p>

        <div className="hero-buttons fade-in delay-3">
          <Button href="#projects" variant="primary" onClick={(e) => handleClick(e, 'projects')}>
            Ver Projetos
          </Button>
          <Button href="#contact" variant="outline" onClick={(e) => handleClick(e, 'contact')}>
            Fale Comigo
          </Button>
        </div>
      </div>

      <div className="scroll-indicator fade-in delay-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
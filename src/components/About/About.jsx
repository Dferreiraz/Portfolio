import Reveal from '../UI/Reveal/Reveal';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import Skills from '../Skills/Skills';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader title="Sobre Mim" />

        <div className="about-grid">
          <Reveal delay={1} className="about-text">
            <p>
              Sou um desenvolvedor front-end apaixonado, focado em criar experiências digitais excepcionais.
              Com uma base sólida em tecnologias web modernas, transformo ideias em realidade através de
              código limpo e eficiente.
            </p>
            <p>
              Cada projeto é uma oportunidade de aprender e crescer, e estou comprometido em entregar
              soluções que não apenas atendam, mas superem as expectativas.
            </p>
          </Reveal>

          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
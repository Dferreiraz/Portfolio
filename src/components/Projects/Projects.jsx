import Reveal from '../UI/Reveal/Reveal';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import Button from '../UI/Button/Button';
import IconButton from '../UI/IconButton/IconButton';
import { projects } from '../../data/projects';
import githubIcon from '../../assets/images/symbole-github-azul.png';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeader title="Projetos" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index + 1} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={`Preview do Projeto ${project.title}`} loading="lazy" />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <Button href={project.demoUrl} size="sm" external>
                    Ver Projeto
                  </Button>
                  <IconButton href={project.githubUrl}>
                    <img src={githubIcon} alt="GitHub" loading="lazy" width="20" height="20" />
                  </IconButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
import Reveal from '../UI/Reveal/Reveal';
import { skills } from '../../data/skills';
import './Skills.css';

function Skills() {
  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <Reveal key={skill.name} delay={index + 2} className="skill-card">
          <div className="skill-icon">
            <img src={skill.icon} alt={`Ícone ${skill.name}`} loading="lazy" />
          </div>
          <span className="skill-name">{skill.name}</span>
        </Reveal>
      ))}
    </div>
  );
}

export default Skills;
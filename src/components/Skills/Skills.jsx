import Reveal from '../UI/Reveal/Reveal';
import './Skills.css';

// Dados das barras de progresso
const progressData = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 65 },
  { name: 'React', level: 60 },
  { name: 'Git & GitHub', level: 75 },
];

// Dados dos 4 cards
const categories = [
  {
    title: 'Front End',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React']
  },
  {
    title: 'Back End',
    items: ['Node.js', 'SQLite']
  },
  {
    title: 'Atualmente Estudando',
    items: ['APIs', 'Node.js', 'SQLite', 'Express']
  },
  {
    title: 'Ferramentas',
    items: ['Git', 'GitHub', 'Figma', 'Vercel', 'Netlify', 'Render', 'npm', 'Postman']
  }
];

// Componente 1: Barras de Progresso
export function SkillsProgress() {
  return (
    <div className="skills-progress">
      <h3>Tecnologias que eu uso</h3>
      {progressData.map((skill, index) => (
        <Reveal key={skill.name} delay={index + 1} className="progress-item">
          <div className="progress-info">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// Componente 2: 4 Cards de Categorias
export function SkillsCards() {
  return (
    <div className="skills-cards">
      {categories.map((category, index) => (
        <Reveal key={category.title} delay={index + 1} className="skill-card">
          <h4>{category.title}</h4>
          <div className="card-tags">
            {category.items.map((item) => (
              <span key={item} className="tag">{item}</span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}


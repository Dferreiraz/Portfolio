import Reveal from '../Reveal/Reveal';
import './SectionHeader.css';

function SectionHeader({ title }) {
  return (
    <Reveal className="section-header">
      <h2 className="section-title">{title}</h2>
      <div className="section-divider"></div>
    </Reveal>
  );
}

export default SectionHeader;
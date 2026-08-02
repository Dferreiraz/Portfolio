import Reveal from '../UI/Reveal/Reveal';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import { contacts } from '../../data/contacts';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeader title="Vamos Trabalhar Juntos" />

        <Reveal delay={1} as="p" className="contact-description">
          Pronto para dar vida às suas ideias? Entre em contato e vamos criar algo incrível juntos.
        </Reveal>

        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <Reveal
              key={contact.label}
              delay={index + 1}
              as="a"
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img src={contact.icon} alt={contact.label} />
              <span className="contact-label">{contact.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
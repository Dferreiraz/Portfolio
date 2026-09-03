import { useState } from 'react';
import Reveal from '../UI/Reveal/Reveal';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import Button from '../UI/Button/Button';
import { contacts } from '../../data/contacts';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Monta a mensagem com quebras de linha reais (\n)
    const text = `Olá, Davi! Vim pelo seu portfólio.\n\n` +
                 `*Nome:* ${formData.name}\n` +
                 `*E-mail:* ${formData.email}\n` +
                 `*Mensagem:* ${formData.message}`;

    // Seu número corrigido (55 + 11 + número, apenas dígitos)
    const phoneNumber = '5511910519200';
    
    // Codifica a URL corretamente para evitar erros de formatação
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Abre o WhatsApp (funciona melhor que window.open em alguns navegadores)
    window.open(whatsappUrl, '_blank');

    // Limpa o formulário após o envio
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeader title="Vamos Conversar?" />
        
        <Reveal delay={1} className="contact-subtitle">
          <p>
            Pronto para dar vida às suas ideias? Preencha o formulário ou me chame diretamente nas redes.
          </p>
        </Reveal>

        <div className="contact-layout">
          {/* Lado Esquerdo: Informações de Contato */}
          <Reveal delay={2} className="contact-info">
            {contacts.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="info-card"
              >
                <div className="icon-wrapper">
                  <img src={contact.icon} alt={`Ícone ${contact.label}`} loading="lazy" />
                </div>
                <div className="info-text">
                  <span className="info-label">{contact.label}</span>
                  <span className="info-value">{contact.info}</span>
                </div>
              </a>
            ))}
          </Reveal>

          {/* Lado Direito: Formulário para WhatsApp */}
          <Reveal delay={3} className="contact-form-wrapper">
            {/* IMPORTANTE: onSubmit={handleSubmit} é o que dispara a função */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Seu e-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Sua mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como posso te ajudar?" 
                  required
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="submit-btn">
                Enviar pelo WhatsApp
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
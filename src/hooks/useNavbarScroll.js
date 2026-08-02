import { useState, useEffect } from 'react';

/**
 * Reproduz a lógica original do listener de scroll:
 * - marca a navbar como "scrolled" após 50px
 * - calcula qual seção está ativa (mesma regra: offsetTop - 100)
 */
export function useNavbarScroll(sectionIds) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);

      let current = '';
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    }

    handleScroll(); // garante estado correto mesmo se a página carregar já rolada
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return { scrolled, activeSection };
}
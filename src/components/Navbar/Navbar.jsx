import { useState } from 'react';
import { navLinks } from '../../data/navLinks';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import { scrollToSection } from '../../utils/scrollToSection';
import './Navbar.css';

const SECTION_IDS = navLinks.map((link) => link.id);

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrolled, activeSection } = useNavbarScroll(SECTION_IDS);

  function handleLinkClick(e, id) {
    e.preventDefault();
    scrollToSection(id);
    setMobileOpen(false);
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-logo" onClick={(e) => e.preventDefault()}>
          DFerreira<span>.</span>
        </a>

        <ul className="navbar-links">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              
                <a href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, id)}
               >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
          aria-label="Menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => handleLinkClick(e, id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
// =====================
// NAVBAR — scroll effect + hamburger
// =====================
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMobile = document.querySelector('.navbar-mobile');
const navLinks = document.querySelectorAll('.navbar-links a, .navbar-mobile a');

// Scroll: adiciona classe .scrolled
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveLink();
});

// Hamburger toggle
if (navbarToggle && navbarMobile) {
  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('open');
    navbarMobile.classList.toggle('open');
  });
}

// Fecha menu mobile ao clicar em link
document.querySelectorAll('.navbar-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    navbarToggle.classList.remove('open');
    navbarMobile.classList.remove('open');
  });
});

// Active link por seção
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// =====================
// SMOOTH SCROLL
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 70; // altura da navbar
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// =====================
// SCROLL-TRIGGERED REVEALS
// =====================
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => observer.observe(el));
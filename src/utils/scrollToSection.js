/**
 * Equivalente ao smooth scroll original,
 * com o mesmo offset de 70px (altura da navbar).
 */
export function scrollToSection(id, offset = 70) {
  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
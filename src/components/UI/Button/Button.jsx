import './Button.css';

/**
 * Botão reutilizável. variant: 'primary' | 'outline'
 * size: undefined (padrão) | 'sm'
 * external: adiciona target="_blank" + rel="noopener noreferrer"
 */
function Button({ href, onClick, variant = 'primary', size, external = false, children }) {
  const variantClass = `btn-${variant}`;
  const sizeClass = size ? `btn-${size}` : '';
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={href} className={`btn ${variantClass} ${sizeClass}`.trim()} onClick={onClick} {...externalProps}>
      {children}
    </a>
  );
}

export default Button;
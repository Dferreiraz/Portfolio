import './Button.css';

/**
 * Botão reutilizável. 
 * variant: 'primary' | 'outline'
 * size: undefined (padrão) | 'sm'
 * external: adiciona target="_blank" + rel="noopener noreferrer"
 * type: 'submit' (renderiza tag <button> nativa para formulários)
 */

function Button({ href, onClick, variant = 'primary', size, external = false, type, children }) {
  const variantClass = `btn-${variant}`;
  const sizeClass = size ? `btn-${size}` : '';

  // SE FOR SUBMIT: Renderiza a tag <button> nativa do HTML
  if (type === 'submit') {
    return (
      <button 
        type="submit" 
        className={`btn ${variantClass} ${sizeClass}`.trim()} 
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  // CASO CONTRÁRIO: Mantém o comportamento de link <a>
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} className={`btn ${variantClass} ${sizeClass}`.trim()} onClick={onClick} {...externalProps}>
      {children}
    </a>
  );
}

export default Button;
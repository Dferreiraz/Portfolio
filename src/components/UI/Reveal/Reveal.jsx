import { useReveal } from '../../../hooks/useReveal';

/**
 * Wrapper reutilizável para qualquer elemento que precise
 * do efeito "reveal ao rolar a página".
 * `as` permite renderizar como div, p, a, etc. (ex: contact-card é um <a>)
 */
function Reveal({ children, delay, className = '', as: Tag = 'div', ...rest }) {
  const [ref, visible] = useReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${visible ? 'visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
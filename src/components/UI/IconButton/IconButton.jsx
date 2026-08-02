import './IconButton.css';

function IconButton({ href, children }) {
  return (
    <a href={href} className="btn-icon" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default IconButton;
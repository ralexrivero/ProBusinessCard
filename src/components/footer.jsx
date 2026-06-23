const Footer = () => {
  return (
    <footer className="footer-body">
      <nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ronald-rivero/"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ralex_uy"
              className="social-icon"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@ralexrivero"
              className="social-icon"
              aria-label="Medium"
            >
              <i className="bi bi-medium" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ralexrivero"
              className="social-icon"
              aria-label="GitHub"
            >
              <i className="bi bi-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-body">
      <nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ralexrivero"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={16} aria-hidden="true" />
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
              <Twitter size={16} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ronald-rivero/"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="mailto:ralexrivero@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={16} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

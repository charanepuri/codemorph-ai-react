import {
  FiBookOpen,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
} from "react-icons/fi";
import "./Footer.css";

const portfolioLinks = [
  {
    name: "Django",
    url: "https://portfolio-site-django.onrender.com",
  },
  {
    name: "React",
    url: "https://charan-react-portfolio.vercel.app",
  },
  {
    name: "Flask",
    url: "https://flask-developer-dashboard-portfolio.onrender.com/",
  },
  {
    name: "Angular",
    url: "https://angular-portfolio-sigma-eight.vercel.app/",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Center */}
        <div className="footer-header">
          <h2>CodeMorph AI</h2>

          <p>
            Transform, understand, optimize, and debug your code with AI.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Left Side - About */}
          <div className="footer-column footer-about">
            <h3>About</h3>

            <p className="footer-copyright">
              © 2026 Built by Epuri Charan Teja
            </p>

            <p className="footer-description">
              Developed with modern technologies used to build an AI-powered
              developer platform.
            </p>
          </div>

          {/* Middle - Project */}
          <div className="footer-column footer-project">
            <h3>Project</h3>

            <a
              href="https://github.com/charanepuri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub aria-hidden="true" />
              <span>GitHub Repository</span>
            </a>

            <a href="/documentation">
              <FiBookOpen aria-hidden="true" />
              <span>Documentation</span>
            </a>
          </div>

          {/* Right Side - Connect */}
          <div className="footer-column footer-connect">
            <h3>Connect</h3>

            <a
              href="https://github.com/charanepuri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/charan-teja-972aa9231"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>

            <h4>Explore Portfolios</h4>

            <div className="footer-portfolios">
              {portfolioLinks.map((portfolio) => (
                <a
                  key={portfolio.name}
                  href={portfolio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{portfolio.name}</span>
                  <FiExternalLink aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Center */}
        <div className="footer-bottom">
          <p>Made with 💕 by Epuri Charan Teja</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
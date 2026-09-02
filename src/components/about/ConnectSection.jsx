import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
} from "react-icons/fi";
import "./ConnectSection.css";

const links = [
  {
    name: "GitHub",
    description: "Explore my repositories and development projects.",
    url: "https://github.com/charanepuri",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    description: "Connect with me and follow my professional journey.",
    url: "https://www.linkedin.com/in/charan-teja-972aa9231",
    icon: FiLinkedin,
  },
];

function ConnectSection() {
  return (
    <section className="connect-section">
      <div className="connect-section__header">
        <span className="connect-section__label">Connect</span>

        <h2 className="connect-section__title">Get in Touch</h2>

        <p className="connect-section__description">
          Connect with me through the platforms below to explore my work and
          development projects.
        </p>
      </div>

      <div className="connect-section__content">
        <div className="connect-section__links">
          {links.map(({ name, description, url, icon: Icon }) => (
            <a
              className="connect-section__link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={name}
            >
              <div className="connect-section__link-icon">
                <Icon size={24} aria-hidden="true" />
              </div>

              <div className="connect-section__link-content">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>

              <FiArrowUpRight
                className="connect-section__arrow"
                size={20}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        <div className="connect-section__portfolio">
          <div className="connect-section__portfolio-icon">
            <FiExternalLink size={24} aria-hidden="true" />
          </div>

          <div>
            <span className="connect-section__portfolio-label">
              Explore More
            </span>

            <h3>View Portfolio</h3>

            <p>
              Explore my portfolio to see more of my projects, skills, and
              development work.
            </p>
          </div>

          <a
            className="connect-section__portfolio-button"
            href="https://charan-react-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Charan Teja's portfolio"
          >
            View Portfolio
            <FiArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
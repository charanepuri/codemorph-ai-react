import { FiCode, FiUser } from "react-icons/fi";
import "./DeveloperProfile.css";

function DeveloperProfile() {
  return (
    <section className="developer-profile">
      <div className="developer-profile__header">
        <span className="developer-profile__label">Meet the Developer</span>

        <h2 className="developer-profile__title">
          Building With Code & Creativity
        </h2>
      </div>

      <div className="developer-profile__card">
        <div className="developer-profile__avatar" aria-hidden="true">
          <FiUser size={42} />
        </div>

        <div className="developer-profile__content">
          <h3 className="developer-profile__name">
            Epuri Charan Teja
          </h3>

          <p className="developer-profile__role">
            Aspiring React Developer
          </p>

          <p className="developer-profile__description">
            Passionate about building modern, responsive, and AI-powered web
            applications that solve real-world problems and deliver meaningful
            developer experiences.
          </p>
        </div>

        <div className="developer-profile__highlight">
          <FiCode size={22} aria-hidden="true" />

          <span>Building the Future with React & AI</span>
        </div>
      </div>
    </section>
  );
}

export default DeveloperProfile;
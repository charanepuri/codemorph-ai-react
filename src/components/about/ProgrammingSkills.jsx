import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiGlobe,
  FiLayers,
  FiServer,
  FiTerminal,
  FiTool,
  FiZap,
} from "react-icons/fi";
import "./ProgrammingSkills.css";

const skills = [
  {
    name: "HTML",
    icon: FiGlobe,
  },
  {
    name: "CSS",
    icon: FiLayers,
  },
  {
    name: "JavaScript",
    icon: FiCode,
  },
  {
    name: "React",
    icon: FiZap,
  },
  {
    name: "Vite",
    icon: FiTool,
  },
  {
    name: "Python",
    icon: FiTerminal,
  },
  {
    name: "Django",
    icon: FiServer,
  },
  {
    name: "Flask",
    icon: FiServer,
  },
  {
    name: "Git",
    icon: FiGitBranch,
  },
  {
    name: "GitHub",
    icon: FiGitBranch,
  },
  {
    name: "REST APIs",
    icon: FiDatabase,
  },
];

function ProgrammingSkills() {
  return (
    <section className="programming-skills">
      <div className="programming-skills__header">
        <span className="programming-skills__label">
          Programming Skills
        </span>

        <h2 className="programming-skills__title">
          Technologies I Work With
        </h2>
      </div>

      <div className="programming-skills__grid">
        {skills.map(({ name, icon: Icon }) => (
          <div className="programming-skills__item" key={name}>
            <Icon
              className="programming-skills__icon"
              aria-hidden="true"
            />

            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgrammingSkills;
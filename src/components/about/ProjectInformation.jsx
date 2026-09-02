import { FiExternalLink } from "react-icons/fi";
import "./ProjectInformation.css";

const projectDetails = [
  {
    label: "Project Name",
    value: "CodeMorph AI",
  },
  {
    label: "Category",
    value: "AI-Powered Developer Tool",
  },
  {
    label: "Version",
    value: "1.0.0",
  },
  {
    label: "Status",
    value: "Active Development",
  },
];

function ProjectInformation() {
  return (
    <section className="project-information">
      <div className="project-information__header">
        <span className="project-information__label">
          Project Information
        </span>

        <h2 className="project-information__title">Project Details</h2>
      </div>

      <div className="project-information__card">
        <div className="project-information__details">
          {projectDetails.map((detail) => (
            <div className="project-information__item" key={detail.label}>
              <span className="project-information__item-label">
                {detail.label}
              </span>

              <span className="project-information__item-value">
                {detail.value}
              </span>
            </div>
          ))}

          <div className="project-information__item">
            <span className="project-information__item-label">Live</span>

            <a
              className="project-information__live-link"
              href="https://codemorph-ai-react.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Live Project</span>
              <FiExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectInformation;
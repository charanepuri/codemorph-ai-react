import "./ProjectOverview.css";

function ProjectOverview() {
  return (
    <section className="project-overview">
      <div className="project-overview__header">
        <span className="project-overview__label">Project Overview</span>

        <h2 className="project-overview__title">
          Built to Make Code Smarter
        </h2>
      </div>

      <div className="project-overview__grid">
        <article className="project-overview__card">
          <div className="project-overview__icon" aria-hidden="true">
            🎯
          </div>

          <h3>Our Mission</h3>

          <p>
            To make programming easier by providing intelligent AI-powered
            tools that help developers understand, transform, optimize, and
            debug their code efficiently.
          </p>
        </article>

        <article className="project-overview__card">
          <div className="project-overview__icon" aria-hidden="true">
            ⚡
          </div>

          <h3>Key Features</h3>

          <ul className="project-overview__features">
            <li>AI Code Converter</li>
            <li>AI Code Explainer</li>
            <li>AI Code Optimizer</li>
            <li>AI Bug Detector</li>
            <li>Multi-language code support</li>
            <li>Code comparison</li>
            <li>Copy and download functionality</li>
            <li>AI-powered analysis and suggestions</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default ProjectOverview;
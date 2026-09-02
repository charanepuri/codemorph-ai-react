import {
  FaBug,
  FaCheck,
  FaCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./BugCard.css";

function BugCard({ bug }) {
  if (!bug) {
    return null;
  }

  return (
    <article
      className={`bug-card severity-${bug.severity}`}
    >
      <div className="bug-card-header">
        <div className="bug-card-title">
          <div className="bug-card-icon">
            <FaBug />
          </div>

          <div>
            <h3>{bug.title}</h3>

            <span className="bug-type">
              {bug.type}
            </span>
          </div>
        </div>

        <span
          className={`bug-severity severity-${bug.severity}`}
        >
          {bug.severity}
        </span>
      </div>

      <div className="bug-card-meta">
        {bug.line && (
          <span>
            <FaMapMarkerAlt />

            Line {bug.line}
          </span>
        )}

        <span>
          <FaCode />

          {bug.type}
        </span>
      </div>

      <div className="bug-card-section">
        <h4>Explanation</h4>

        <p>{bug.description}</p>
      </div>

      <div className="bug-card-section">
        <h4>
          <FaCheck />

          Suggested Fix
        </h4>

        <p>{bug.fix}</p>
      </div>
    </article>
  );
}

export default BugCard;
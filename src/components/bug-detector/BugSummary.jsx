import {
  FaBug,
  FaExclamationTriangle,
} from "react-icons/fa";

import "./BugSummary.css";

function BugSummary({ summary }) {
  if (!summary) {
    return null;
  }

  return (
    <section className="bug-summary">
      <div className="bug-summary-header">
        <div className="bug-summary-icon">
          <FaBug />
        </div>

        <div>
          <h2>Bug Summary</h2>

          <p>
            Issues identified in your code.
          </p>
        </div>
      </div>

      <div className="bug-summary-grid">
        <div className="bug-summary-card total">
          <span>Total Issues</span>

          <strong>
            {summary.total}
          </strong>
        </div>

        <div className="bug-summary-card critical">
          <span>Critical</span>

          <strong>
            {summary.critical}
          </strong>
        </div>

        <div className="bug-summary-card high">
          <span>High</span>

          <strong>
            {summary.high}
          </strong>
        </div>

        <div className="bug-summary-card medium">
          <span>Medium</span>

          <strong>
            {summary.medium}
          </strong>
        </div>

        <div className="bug-summary-card low">
          <span>Low</span>

          <strong>
            {summary.low}
          </strong>
        </div>
      </div>

      {summary.total === 0 && (
        <div className="bug-summary-success">
          <FaExclamationTriangle />

          <span>
            No bugs were detected in the
            provided code.
          </span>
        </div>
      )}
    </section>
  );
}

export default BugSummary;
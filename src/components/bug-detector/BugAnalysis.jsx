import { FaBug } from "react-icons/fa";

import BugSummary from "./BugSummary";
import BugCard from "./BugCard";

import "./BugAnalysis.css";

function BugAnalysis({
  bugs = [],
  summary,
  loading = false,
}) {
  if (loading) {
    return (
      <section className="bug-analysis">
        <div className="bug-analysis-loading">
          <div className="bug-spinner" />

          <h3>Scanning Your Code</h3>

          <p>
            Gemini AI is checking your code for
            syntax, logic, runtime, security,
            and edge-case issues.
          </p>
        </div>
      </section>
    );
  }

  if (!summary) {
    return null;
  }

  return (
    <div className="bug-analysis">
      <BugSummary summary={summary} />

      {bugs.length > 0 && (
        <section className="bug-list-section">
          <div className="bug-list-header">
            <div>
              <h2>Detected Issues</h2>

              <p>
                Review each issue and its
                suggested fix.
              </p>
            </div>

            <FaBug />
          </div>

          <div className="bug-list">
            {bugs.map((bug) => (
              <BugCard
                key={bug.id}
                bug={bug}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default BugAnalysis;
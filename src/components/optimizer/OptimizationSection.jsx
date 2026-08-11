import {
  FaChartLine,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

import OptimizationCard from "./OptimizationCard";

import "./OptimizationSection.css";

function extractSection(content, heading) {
  if (!content?.trim()) {
    return "";
  }

  const normalized = content
    .replace(/\r\n/g, "\n")
    .trim();

  const headingPattern = new RegExp(
    `^#{1,3}\\s+${heading.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    )}\\s*$`,
    "im"
  );

  const match = headingPattern.exec(
    normalized
  );

  if (!match) {
    return "";
  }

  const start =
    match.index + match[0].length;

  const remaining =
    normalized.slice(start);

  const nextHeading =
    remaining.match(
      /\n#{1,2}\s+[^\n]+/
    );

  if (!nextHeading) {
    return remaining.trim();
  }

  return remaining
    .slice(0, nextHeading.index)
    .trim();
}

function extractOptimizedCode(content) {
  const section = extractSection(
    content,
    "Optimized Code"
  );

  if (!section) {
    return "";
  }

  return section
    .replace(/^```[a-zA-Z0-9+#.-]*\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
}

function OptimizationSection({
  content = "",
  loading = false,
  error = "",
}) {
  if (loading) {
    return (
      <section className="optimization-section">
        <div className="optimization-state">
          <div className="optimization-spinner" />

          <h3>Optimizing Code</h3>

          <p>
            Gemini AI is analyzing your code and
            preparing optimization suggestions.
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="optimization-section">
        <div className="optimization-state optimization-error">
          <FaExclamationTriangle />

          <h3>Optimization Failed</h3>

          <p>{error}</p>
        </div>
      </section>
    );
  }

  if (!content.trim()) {
    return null;
  }

  const performance =
    extractSection(
      content,
      "Performance Improvements"
    );

  const readability =
    extractSection(
      content,
      "Readability Improvements"
    );

  const maintainability =
    extractSection(
      content,
      "Maintainability Improvements"
    );

  const bestPractices =
    extractSection(
      content,
      "Best Practices"
    );

  const potentialIssues =
    extractSection(
      content,
      "Potential Issues"
    );

  return (
    <section className="optimization-section">
      <div className="optimization-section-header">
        <div>
          <h2>Optimization Analysis</h2>

          <p>
            Here's what Gemini AI improved in
            your code.
          </p>
        </div>

        <FaChartLine />
      </div>

      <div className="optimization-grid">
        <OptimizationCard
          title="Performance Improvements"
          content={performance}
          type="success"
        />

        <OptimizationCard
          title="Readability Improvements"
          content={readability}
          type="default"
        />

        <OptimizationCard
          title="Maintainability Improvements"
          content={maintainability}
          type="default"
        />

        <OptimizationCard
          title="Best Practices"
          content={bestPractices}
          type="success"
        />

        <OptimizationCard
          title="Potential Issues"
          content={potentialIssues}
          type="warning"
        />
      </div>

      <div className="optimization-success">
        <FaCheckCircle />

        <span>
          Optimization analysis completed
          successfully.
        </span>
      </div>
    </section>
  );
}

export {
  extractOptimizedCode,
};

export default OptimizationSection;
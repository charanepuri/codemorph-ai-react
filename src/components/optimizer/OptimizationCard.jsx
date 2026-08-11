import {
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

import MarkdownRenderer from "../explain/MarkdownRenderer";

import "./OptimizationCard.css";

function OptimizationCard({
  title,
  content = "",
  type = "default",
}) {
  const icons = {
    success: <FaCheckCircle />,
    warning: <FaExclamationTriangle />,
    default: <FaInfoCircle />,
  };

  return (
    <article
      className={`optimization-card optimization-card-${type}`}
    >
      <div className="optimization-card-header">
        <div className="optimization-card-icon">
          {icons[type] || icons.default}
        </div>

        <h3>{title}</h3>
      </div>

      <div className="optimization-card-body">
        {content ? (
          <MarkdownRenderer
            content={content}
          />
        ) : (
          <p className="optimization-card-empty">
            No specific improvements were
            identified in this category.
          </p>
        )}
      </div>
    </article>
  );
}

export default OptimizationCard;
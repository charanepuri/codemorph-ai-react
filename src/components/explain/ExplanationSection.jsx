import { FaBrain, FaExclamationTriangle } from "react-icons/fa";

import ExplanationCard from "./ExplanationCard";
import ExplanationTabs from "./ExplanationTabs";
import ExplanationActions from "./ExplanationActions";

import "./ExplanationSection.css";

function ExplanationSection({
  content = "",
  loading = false,
  error = "",
}) {
  if (loading) {
    return (
      <ExplanationCard
        title="Analyzing Code"
        description="Gemini AI is analyzing your code and preparing the explanation."
        icon={<FaBrain />}
        className="explanation-loading"
      >
        <div className="explanation-loader">
          <div className="explanation-spinner" />

          <p>
            Generating detailed explanation...
          </p>

          <span>
            This may take a few seconds.
          </span>
        </div>
      </ExplanationCard>
    );
  }

  if (error) {
    return (
      <ExplanationCard
        title="Explanation Failed"
        description="We couldn't generate an explanation for this code."
        icon={<FaExclamationTriangle />}
        className="explanation-error"
      >
        <div className="explanation-error-message">
          <p>{error}</p>

          <span>
            Check your code and connection, then try
            again.
          </span>
        </div>
      </ExplanationCard>
    );
  }

  if (!content.trim()) {
    return (
      <ExplanationCard
        title="Code Explanation"
        description="Your AI-generated explanation will appear here."
        icon={<FaBrain />}
      >
        <div className="explanation-empty">
          <p>
            Enter your code and click{" "}
            <strong>Explain Code</strong> to begin.
          </p>
        </div>
      </ExplanationCard>
    );
  }

  return (
    <ExplanationCard
      title="AI Code Explanation"
      description="Understand your code from beginner to advanced level."
      icon={<FaBrain />}
    >
      <ExplanationTabs content={content} />
      
      <ExplanationActions   content={content}/>
    </ExplanationCard>
  );
}

export default ExplanationSection;
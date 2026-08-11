import { useMemo, useState } from "react";

import MarkdownRenderer from "./MarkdownRenderer";

import {
  parseExplanationResponse,
} from "../../utils/explanationParser";

import "./ExplanationTabs.css";

const tabs = [
  {
    id: "summary",
    label: "Overall Summary",
  },
  {
    id: "lineByLine",
    label: "Line-by-Line",
  },
  {
    id: "flow",
    label: "Program Flow",
  },
  {
    id: "beginner",
    label: "Beginner",
  },
  {
    id: "advanced",
    label: "Advanced",
  },
];

function ExplanationTabs({ content = "" }) {
  const [activeTab, setActiveTab] =
    useState("summary");

  const sections = useMemo(
    () => parseExplanationResponse(content),
    [content]
  );

  const activeContent =
    sections[activeTab] || "";

  return (
    <section className="explanation-tabs">
      <div className="explanation-tabs-header">
        <div className="explanation-tabs-list">
          {tabs.map((tab) => {
            const hasContent =
              Boolean(sections[tab.id]);

            return (
              <button
                key={tab.id}
                type="button"
                className={`explanation-tab ${
                  activeTab === tab.id
                    ? "active"
                    : ""
                } ${
                  !hasContent
                    ? "unavailable"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab(tab.id)
                }
                aria-selected={
                  activeTab === tab.id
                }
                role="tab"
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="explanation-tab-content"
        role="tabpanel"
      >
        {activeContent ? (
          <MarkdownRenderer
            content={activeContent}
          />
        ) : (
          <div className="explanation-section-empty">
            <p>
              This explanation section was not
              returned by the AI.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ExplanationTabs;
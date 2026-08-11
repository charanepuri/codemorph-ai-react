import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaBrain } from "react-icons/fa";

import PageHeader from "../../components/common/PageHeader";

import LanguageSelector from "../../components/editor/LanguageSelector";
import CodeEditor from "../../components/editor/CodeEditor";
import StatusBar from "../../components/editor/StatusBar";

import ExplanationSection from "../../components/explain/ExplanationSection";

import useGemini from "../../hooks/useGemini";

import "./Explain.css";

function Explain() {
  const [language, setLanguage] =
    useState("python");

  const [sourceCode, setSourceCode] = useState(`def greet(name):
    message = f"Hello, {name}!"
    return message

print(greet("Charan"))`);

  const {
    loading,
    error,
    response,
    explainCode,
  } = useGemini();

  const lineCount = sourceCode
    ? sourceCode.split("\n").length
    : 0;

  const handleExplain = async () => {
    if (!sourceCode.trim()) {
      toast.error("Please enter code to explain.");
      return;
    }

    try {
      await explainCode({
        language,
        code: sourceCode,
      });

      toast.success(
        "Code explanation generated successfully."
      );
    } catch (err) {
      toast.error(
        err?.message ||
          "Failed to generate explanation."
      );
    }
  };

  return (
    <div className="explain-page">
      <PageHeader
        title="Explain Code"
        description="Understand your code with AI-powered explanations from beginner to advanced level."
      />

      <div className="explain-controls">
        <LanguageSelector
          value={language}
          onChange={setLanguage}
        />

        <button
          type="button"
          className="explain-button"
          onClick={handleExplain}
          disabled={loading}
        >
          <FaBrain />

          <span>
            {loading
              ? "Analyzing..."
              : "Explain Code"}
          </span>
        </button>
      </div>

      <section className="explain-editor">
        <div className="explain-editor-header">
          <div>
            <h2>Source Code</h2>

            <p>
              Enter the code you want Gemini AI to
              explain.
            </p>
          </div>
        </div>

        <CodeEditor
          language={language}
          value={sourceCode}
          onChange={setSourceCode}
        />

        <StatusBar
          language={language}
          lines={lineCount}
        />
      </section>

      <ExplanationSection
        content={response}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Explain;
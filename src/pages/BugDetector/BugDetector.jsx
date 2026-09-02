import { useState } from "react";
import { FaBug } from "react-icons/fa";
import { toast } from "react-hot-toast";

import PageHeader from "../../components/common/PageHeader";

import LanguageSelector from "../../components/editor/LanguageSelector";
import CodeEditor from "../../components/editor/CodeEditor";
import StatusBar from "../../components/editor/StatusBar";

import BugAnalysis from "../../components/bug-detector/BugAnalysis";
import CorrectedCode from "../../components/bug-detector/CorrectedCode";

import useGemini from "../../hooks/useGemini";

import {
  parseBugResponse,
} from "../../utils/bugParser";

import "./BugDetector.css";

function BugDetector() {
  const [language, setLanguage] =
    useState("python");

  const [sourceCode, setSourceCode] =
    useState(`def calculate_average(numbers):
    total = 0

    for number in numbers:
        total += number

    return total / count


numbers = [10, 20, 30, 40]

result = calculate_average(numbers)

print(result)`);

  const [analysis, setAnalysis] =
    useState(null);

  const {
    loading,
    error,
    detectBugs,
    reset,
  } = useGemini();

  const lineCount = sourceCode
    ? sourceCode.split("\n").length
    : 0;

  const handleLanguageChange = (
    newLanguage
  ) => {
    setLanguage(newLanguage);

    setAnalysis(null);

    reset();
  };

  const handleDetectBugs = async () => {
    if (!sourceCode.trim()) {
      toast.error(
        "Please enter code to scan."
      );

      return;
    }

    try {
      const result =
        await detectBugs({
          language,
          code: sourceCode,
        });

      const parsed =
        parseBugResponse(result);

      setAnalysis(parsed);

      if (parsed.summary.total === 0) {
        toast.success(
          "No bugs detected."
        );
      } else {
        toast.success(
          `${parsed.summary.total} issue${
            parsed.summary.total === 1
              ? ""
              : "s"
          } detected.`
        );
      }
    } catch (err) {
      setAnalysis(null);

      toast.error(
        err?.message ||
          "Failed to analyze the code."
      );
    }
  };

  return (
    <div className="bug-detector-page">
      <PageHeader
        title="AI Bug Detector"
        description="Find syntax, logic, runtime, security, and edge-case issues with Gemini AI."
      />

      <div className="bug-detector-controls">
        <LanguageSelector
          value={language}
          onChange={
            handleLanguageChange
          }
        />

        <button
          type="button"
          className="bug-detector-button"
          onClick={handleDetectBugs}
          disabled={
            loading ||
            !sourceCode.trim()
          }
        >
          <FaBug />

          <span>
            {loading
              ? "Scanning..."
              : "Find Bugs"}
          </span>
        </button>
      </div>

      <section className="bug-detector-editor">
        <div className="bug-detector-editor-header">
          <div>
            <h2>Source Code</h2>

            <p>
              Enter the code you want to
              analyze.
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

      {error && !loading && (
        <div className="bug-detector-error">
          <strong>
            Analysis failed:
          </strong>

          <span>{error}</span>
        </div>
      )}

      <BugAnalysis
        bugs={analysis?.bugs || []}
        summary={analysis?.summary}
        loading={loading}
      />

      {!loading &&
        analysis?.correctedCode && (
          <CorrectedCode
            language={language}
            code={
              analysis.correctedCode
            }
          />
        )}
    </div>
  );
}

export default BugDetector;
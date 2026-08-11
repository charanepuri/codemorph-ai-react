import { useState } from "react";
import {
  FaBolt,
  FaCopy,
  FaDownload,
  FaTrash,
} from "react-icons/fa";
import { toast } from "react-hot-toast";

import PageHeader from "../../components/common/PageHeader";

import LanguageSelector from "../../components/editor/LanguageSelector";
import CodeEditor from "../../components/editor/CodeEditor";
import StatusBar from "../../components/editor/StatusBar";

import OptimizationSection, {
  extractOptimizedCode,
} from "../../components/optimizer/OptimizationSection";

import OptimizationStats from "../../components/optimizer/OptimizationStats";
import OptimizationComparison from "../../components/optimizer/OptimizationComparison";

import useGemini from "../../hooks/useGemini";

import { copyToClipboard } from "../../utils/copy";
import { downloadCode } from "../../utils/download";

import "./Optimizer.css";

const LANGUAGE_EXTENSIONS = {
  python: ".py",
  javascript: ".js",
  typescript: ".ts",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  csharp: ".cs",
  go: ".go",
  rust: ".rs",
  kotlin: ".kt",
  swift: ".swift",
  php: ".php",
  ruby: ".rb",
};

function Optimizer() {
  const [language, setLanguage] =
    useState("python");

  const [sourceCode, setSourceCode] = useState(`def calculate_total(numbers):
    total = 0

    for number in numbers:
        total = total + number

    return total


numbers = [10, 20, 30, 40, 50]

result = calculate_total(numbers)

print(result)`);

  const [optimizedCode, setOptimizedCode] =
    useState("");

  const [analysis, setAnalysis] =
    useState("");

  const {
    loading,
    error,
    optimizeCode,
    reset,
  } = useGemini();

  const sourceLines = sourceCode
    ? sourceCode.split("\n").length
    : 0;

  const optimizedLines = optimizedCode
    ? optimizedCode.split("\n").length
    : 0;

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);

    setOptimizedCode("");
    setAnalysis("");

    reset();
  };

  const handleOptimize = async () => {
    if (!sourceCode.trim()) {
      toast.error(
        "Please enter code to optimize."
      );

      return;
    }

    try {
      const result = await optimizeCode({
        language,
        code: sourceCode,
      });

      const extractedCode =
        extractOptimizedCode(result);

      if (!extractedCode) {
        throw new Error(
          "The AI did not return valid optimized code."
        );
      }

      setOptimizedCode(extractedCode);
      setAnalysis(result);

      toast.success(
        "Code optimized successfully."
      );
    } catch (err) {
      toast.error(
        err?.message ||
          "Failed to optimize code."
      );
    }
  };

  const handleCopy = async () => {
    if (!optimizedCode.trim()) {
      toast.error(
        "No optimized code available."
      );

      return;
    }

    const result =
      await copyToClipboard(
        optimizedCode
      );

    if (result.success) {
      toast.success(
        "Optimized code copied successfully."
      );
    } else {
      toast.error(result.message);
    }
  };

  const handleDownload = () => {
    if (!optimizedCode.trim()) {
      toast.error(
        "No optimized code available."
      );

      return;
    }

    const extension =
      LANGUAGE_EXTENSIONS[language] ||
      ".txt";

    downloadCode(
      optimizedCode,
      `optimized-${language}${extension}`
    );

    toast.success(
      "Optimized code download started."
    );
  };

  const handleClear = () => {
    setOptimizedCode("");
    setAnalysis("");

    reset();

    toast.success(
      "Optimization result cleared."
    );
  };

  return (
    <div className="optimizer-page">
      <PageHeader
        title="AI Code Optimizer"
        description="Improve performance, readability, maintainability, and coding practices with Gemini AI."
      />

      <div className="optimizer-controls">
        <LanguageSelector
          value={language}
          onChange={handleLanguageChange}
        />

        <div className="optimizer-control-actions">
          <button
            type="button"
            className="optimizer-button"
            onClick={handleOptimize}
            disabled={
              loading ||
              !sourceCode.trim()
            }
          >
            <FaBolt />

            <span>
              {loading
                ? "Optimizing..."
                : "Optimize Code"}
            </span>
          </button>

          <button
            type="button"
            className="optimizer-clear-button"
            onClick={handleClear}
            disabled={
              loading ||
              !optimizedCode.trim()
            }
            title="Clear optimization result"
          >
            <FaTrash />

            <span>Clear Result</span>
          </button>
        </div>
      </div>

      <div className="optimizer-workspace">
        <section className="optimizer-editor-card">
          <div className="optimizer-editor-header">
            <div>
              <h2>Original Code</h2>

              <p>
                Enter the code you want to
                optimize.
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
            lines={sourceLines}
          />
        </section>

        <section className="optimizer-editor-card">
          <div className="optimizer-editor-header">
            <div>
              <h2>Optimized Code</h2>

              <p>
                Your optimized code will
                appear here.
              </p>
            </div>

            <div className="optimizer-editor-actions">
              <button
                type="button"
                onClick={handleCopy}
                disabled={
                  loading ||
                  !optimizedCode.trim()
                }
                title="Copy optimized code"
              >
                <FaCopy />
              </button>

              <button
                type="button"
                onClick={handleDownload}
                disabled={
                  loading ||
                  !optimizedCode.trim()
                }
                title="Download optimized code"
              >
                <FaDownload />
              </button>
            </div>
          </div>

          <CodeEditor
            language={language}
            value={optimizedCode}
            readOnly
          />

          <StatusBar
            language={language}
            lines={optimizedLines}
          />
        </section>
      </div>

      {optimizedCode && (
        <>
          <OptimizationStats
            sourceCode={sourceCode}
            optimizedCode={optimizedCode}
            language={language}
          />

          <OptimizationComparison
            originalCode={sourceCode}
            optimizedCode={optimizedCode}
          />
        </>
      )}

      <OptimizationSection
        content={analysis}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Optimizer;
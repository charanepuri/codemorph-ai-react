import {
  FaCopy,
  FaDownload,
} from "react-icons/fa";

import { toast } from "react-hot-toast";

import CodeEditor from "../editor/CodeEditor";
import StatusBar from "../editor/StatusBar";

import {
  copyToClipboard,
} from "../../utils/copy";

import {
  downloadCode,
} from "../../utils/download";

import "./CorrectedCode.css";

const EXTENSIONS = {
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

function CorrectedCode({
  language,
  code = "",
}) {
  if (!code.trim()) {
    return null;
  }

  const lines = code.split("\n").length;

  const handleCopy = async () => {
    const result =
      await copyToClipboard(code);

    if (result.success) {
      toast.success(
        "Corrected code copied successfully."
      );
    } else {
      toast.error(result.message);
    }
  };

  const handleDownload = () => {
    const extension =
      EXTENSIONS[language] || ".txt";

    downloadCode(
      code,
      `corrected-code${extension}`
    );

    toast.success(
      "Corrected code download started."
    );
  };

  return (
    <section className="corrected-code">
      <div className="corrected-code-header">
        <div>
          <h2>Corrected Code</h2>

          <p>
            AI-generated version with the
            detected issues addressed.
          </p>
        </div>

        <div className="corrected-code-actions">
          <button
            type="button"
            onClick={handleCopy}
            title="Copy corrected code"
          >
            <FaCopy />
          </button>

          <button
            type="button"
            onClick={handleDownload}
            title="Download corrected code"
          >
            <FaDownload />
          </button>
        </div>
      </div>

      <CodeEditor
        language={language}
        value={code}
        readOnly
      />

      <StatusBar
        language={language}
        lines={lines}
      />
    </section>
  );
}

export default CorrectedCode;
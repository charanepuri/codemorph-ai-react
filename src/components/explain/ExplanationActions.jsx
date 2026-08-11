import {
  FaCopy,
  FaDownload,
} from "react-icons/fa";

import { toast } from "react-hot-toast";

import {
  copyToClipboard,
} from "../../utils/copy";

import {
  downloadCode,
} from "../../utils/download";

import "./ExplanationActions.css";

function ExplanationActions({
  content = "",
}) {
  const hasContent = content.trim().length > 0;

  const handleCopy = async () => {
    if (!hasContent) {
      toast.error(
        "No explanation available to copy."
      );

      return;
    }

    const result =
      await copyToClipboard(content);

    if (result.success) {
      toast.success(
        "Explanation copied successfully."
      );
    } else {
      toast.error(result.message);
    }
  };

  const handleDownload = () => {
    if (!hasContent) {
      toast.error(
        "No explanation available to download."
      );

      return;
    }

    downloadCode(
      content,
      "codemorph-explanation.md"
    );

    toast.success(
      "Explanation download started."
    );
  };

  return (
    <div className="explanation-actions">
      <button
        type="button"
        className="explanation-action-button"
        onClick={handleCopy}
        disabled={!hasContent}
      >
        <FaCopy />

        <span>Copy Explanation</span>
      </button>

      <button
        type="button"
        className="explanation-action-button"
        onClick={handleDownload}
        disabled={!hasContent}
      >
        <FaDownload />

        <span>Download Markdown</span>
      </button>
    </div>
  );
}

export default ExplanationActions;
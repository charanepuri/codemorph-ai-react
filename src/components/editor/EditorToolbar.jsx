import {
  FaBolt,
  FaCopy,
  FaDownload,
  FaExchangeAlt,
  FaTrash,
} from "react-icons/fa";

import ToolbarButton from "./ToolbarButton";

import "./EditorToolbar.css";

function EditorToolbar({
  loading = false,
  onConvert,
  onCopy,
  onClear,
  onDownload,
  onSwap,
}) {
  return (
    <div className="editor-toolbar">
      <ToolbarButton
        icon={<FaBolt />}
        text={loading ? "Converting..." : "Convert"}
        onClick={onConvert}
        disabled={loading}
      />

      <ToolbarButton
        icon={<FaCopy />}
        text="Copy"
        onClick={onCopy}
        disabled={loading}
      />

      <ToolbarButton
        icon={<FaDownload />}
        text="Download"
        onClick={onDownload}
        disabled={loading}
      />

      <ToolbarButton
        icon={<FaExchangeAlt />}
        text="Swap"
        onClick={onSwap}
        disabled={loading}
      />

      <ToolbarButton
        icon={<FaTrash />}
        text="Clear"
        onClick={onClear}
        disabled={loading}
      />
    </div>
  );
}

export default EditorToolbar;
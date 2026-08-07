import {
  FaCopy,
  FaTrash,
  FaDownload,
  FaExchangeAlt,
} from "react-icons/fa";

import ToolbarButton from "./ToolbarButton";

import "./EditorToolbar.css";

function EditorToolbar({
  onCopy,
  onClear,
  onDownload,
  onSwap,
}) {
  return (
    <div className="editor-toolbar">
      <ToolbarButton
        icon={<FaCopy />}
        text="Copy"
        onClick={onCopy}
      />

      <ToolbarButton
        icon={<FaTrash />}
        text="Clear"
        onClick={onClear}
      />

      <ToolbarButton
        icon={<FaDownload />}
        text="Download"
        onClick={onDownload}
      />

      <ToolbarButton
        icon={<FaExchangeAlt />}
        text="Swap"
        onClick={onSwap}
      />
    </div>
  );
}

export default EditorToolbar;
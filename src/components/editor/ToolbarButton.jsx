function ToolbarButton({
  icon,
  text,
  onClick,
  disabled = false,
}) {
  return (
    <button
      className="toolbar-button"
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {icon}

      <span>{text}</span>
    </button>
  );
}

export default ToolbarButton;
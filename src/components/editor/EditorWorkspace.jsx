import "./EditorWorkspace.css";

function EditorWorkspace({
  left,
  right,
}) {
  return (
    <section className="editor-workspace">
      <div className="editor-panel">
        {left}
      </div>

      <div className="editor-panel">
        {right}
      </div>
    </section>
  );
}

export default EditorWorkspace;
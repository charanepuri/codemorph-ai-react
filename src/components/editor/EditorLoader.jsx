import "./EditorLoader.css";

function EditorLoader() {
  return (
    <div className="editor-loader">
      <div className="editor-loader-spinner" />

      <p>Loading Monaco Editor...</p>
    </div>
  );
}

export default EditorLoader;
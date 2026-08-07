import CodeEditor from "./CodeEditor";

function OutputEditor({
  language,
  value,
}) {
  return (
    <CodeEditor
      language={language}
      value={value}
      readOnly
    />
  );
}

export default OutputEditor;
import Editor from "@monaco-editor/react";
import { useRef } from "react";

import { useTheme } from "../../context/ThemeContext";
import EditorLoader from "./EditorLoader";

function CodeEditor({
  language,
  value,
  onChange,
  readOnly = false,
}) {
  const { isDark } = useTheme();

  const editorRef = useRef(null);

  function handleMount(editor) {
    editorRef.current = editor;

    editor.focus();
  }

  return (
    <Editor
      loading={<EditorLoader />}
      height="500px"
      language={language}
      value={value}
      onChange={(value) => onChange?.(value ?? "")}
      onMount={handleMount}
      theme={isDark ? "vs-dark" : "light"}
      options={{
        readOnly,

        automaticLayout: true,

        minimap: {
          enabled: true,
        },

        fontSize: 15,

        fontFamily:
          "'Fira Code', Consolas, monospace",

        fontLigatures: true,

        wordWrap: "on",

        scrollBeyondLastLine: false,

        smoothScrolling: true,

        tabSize: 4,

        insertSpaces: true,

        renderWhitespace: "selection",

        cursorBlinking: "smooth",

        cursorSmoothCaretAnimation: "on",

        formatOnPaste: true,

        formatOnType: true,

        padding: {
          top: 16,
          bottom: 16,
        },
      }}
    />
  );
}

export default CodeEditor;
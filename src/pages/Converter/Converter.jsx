import { useMemo, useState } from "react";
import { toast } from "react-hot-toast";

import "./Converter.css";

import PageHeader from "../../components/common/PageHeader";
import LanguageSelector from "../../components/editor/LanguageSelector";
import EditorToolbar from "../../components/editor/EditorToolbar";
import EditorWorkspace from "../../components/editor/EditorWorkspace";
import CodeEditor from "../../components/editor/CodeEditor";
import OutputEditor from "../../components/editor/OutputEditor";
import StatusBar from "../../components/editor/StatusBar";

import languages from "../../data/languages";

import { copyToClipboard } from "../../utils/copy";
import { downloadCode } from "../../utils/download";

function Converter() {
  const [sourceLanguage, setSourceLanguage] = useState("javascript");
  const [targetLanguage, setTargetLanguage] = useState("python");

  const [sourceCode, setSourceCode] = useState(`function greet(name) {
  return "Hello " + name;
}`);

  const [outputCode, setOutputCode] = useState("");

  const extension = useMemo(() => {
    const language = languages.find(
      (item) => item.monaco === targetLanguage
    );

    return language?.extension || ".txt";
  }, [targetLanguage]);

  const sourceLines = sourceCode
    ? sourceCode.split("\n").length
    : 0;

  const outputLines = outputCode
    ? outputCode.split("\n").length
    : 0;

  const handleCopy = async () => {
    if (!outputCode.trim()) {
      toast.error("No converted code to copy.");
      return;
    }

    const result = await copyToClipboard(outputCode);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const handleClear = () => {
    setSourceCode("");
    setOutputCode("");

    toast.success("Workspace cleared.");
  };

  const handleDownload = () => {
    if (!outputCode.trim()) {
      toast.error("No converted code available.");
      return;
    }

    downloadCode(
      outputCode,
      `converted-code${extension}`
    );

    toast.success("Download started.");
  };

  const handleSwap = () => {
    const previousSourceLanguage = sourceLanguage;
    const previousTargetLanguage = targetLanguage;

    const previousSourceCode = sourceCode;
    const previousOutputCode = outputCode;

    setSourceLanguage(previousTargetLanguage);
    setTargetLanguage(previousSourceLanguage);

    setSourceCode(previousOutputCode);
    setOutputCode(previousSourceCode);

    toast.success("Languages swapped.");
  };

  return (
    <>
      <PageHeader
        title="AI Code Converter"
        description="Convert code between programming languages using artificial intelligence."
      />

      <div className="converter-header">
        <LanguageSelector
          value={sourceLanguage}
          onChange={setSourceLanguage}
        />

        <LanguageSelector
          value={targetLanguage}
          onChange={setTargetLanguage}
        />
      </div>

      <EditorToolbar
        onCopy={handleCopy}
        onClear={handleClear}
        onDownload={handleDownload}
        onSwap={handleSwap}
      />

      <EditorWorkspace
        left={
          <>
            <CodeEditor
              language={sourceLanguage}
              value={sourceCode}
              onChange={setSourceCode}
            />

            <StatusBar
              language={sourceLanguage}
              lines={sourceLines}
            />
          </>
        }
        right={
          <>
            <OutputEditor
              language={targetLanguage}
              value={outputCode}
            />

            <StatusBar
              language={targetLanguage}
              lines={outputLines}
            />
          </>
        }
      />
    </>
  );
}

export default Converter;
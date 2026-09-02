import { useState } from "react";
import { toast } from "react-hot-toast";

import "./Converter.css";

import PageHeader from "../../components/common/PageHeader";

import LanguageSelector from "../../components/editor/LanguageSelector";
import EditorToolbar from "../../components/editor/EditorToolbar";
import EditorWorkspace from "../../components/editor/EditorWorkspace";
import CodeEditor from "../../components/editor/CodeEditor";
import OutputEditor from "../../components/editor/OutputEditor";
import StatusBar from "../../components/editor/StatusBar";

import CodeStats from "../../components/converter/CodeStats";
import ComparisonPanel from "../../components/converter/ComparisonPanel";

import useGemini from "../../hooks/useGemini";

import { copyToClipboard } from "../../utils/copy";
import { downloadCode } from "../../utils/download";
import {
  validateConversion,
  getDownloadFileName,
} from "../../utils/converter";

function calculateStats(code = "", language = "") {
  const normalized = code.replace(/\r\n/g, "\n");

  const lines =
    normalized.trim().length === 0
      ? 0
      : normalized.split("\n").length;

  const characters = normalized.length;

  const words =
    normalized.trim().length === 0
      ? 0
      : normalized.trim().split(/\s+/).length;

  return {
    language,
    lines,
    characters,
    words,
  };
}

function Converter() {
  const [sourceLanguage, setSourceLanguage] =
    useState("javascript");

  const [targetLanguage, setTargetLanguage] =
    useState("python");

  const [sourceCode, setSourceCode] = useState(`function greet(name) {
  return "Hello " + name;
}`);

  const [outputCode, setOutputCode] = useState("");

  const { loading, convertCode } = useGemini();

  const sourceStats = calculateStats(
    sourceCode,
    sourceLanguage
  );

  const outputStats = calculateStats(
    outputCode,
    targetLanguage
  );

  const handleConvert = async () => {
    const validation = validateConversion({
      sourceLanguage,
      targetLanguage,
      sourceCode,
    });

    if (!validation.valid) {
      toast.error(validation.message);
      return;
    }

    try {
      const convertedCode = await convertCode({
        sourceLanguage,
        targetLanguage,
        code: sourceCode,
      });

      setOutputCode(convertedCode);

      toast.success("Code converted successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
      getDownloadFileName(
        sourceLanguage,
        targetLanguage
      )
    );

    toast.success("Download started.");
  };

  const handleSwap = () => {
    const oldSourceLanguage = sourceLanguage;
    const oldTargetLanguage = targetLanguage;

    const oldSourceCode = sourceCode;
    const oldOutputCode = outputCode;

    setSourceLanguage(oldTargetLanguage);
    setTargetLanguage(oldSourceLanguage);

    setSourceCode(oldOutputCode);
    setOutputCode(oldSourceCode);

    toast.success("Languages swapped.");
  };

  return (
    <>
      <PageHeader
        title="AI Code Converter"
        description="Convert code between programming languages using Gemini AI."
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
        loading={loading}
        onConvert={handleConvert}
        onCopy={handleCopy}
        onClear={handleClear}
        onDownload={handleDownload}
        onSwap={handleSwap}
        disableCopy={!outputCode.trim()}
        disableDownload={!outputCode.trim()}
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
              lines={sourceStats.lines}
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
              lines={outputStats.lines}
            />
          </>
        }
      />

      <div className="converter-stats">
        <CodeStats
          title="Source Code"
          stats={sourceStats}
        />

        <CodeStats
          title="Converted Code"
          stats={outputStats}
        />
      </div>

      <ComparisonPanel
        sourceLanguage={sourceLanguage}
        targetLanguage={targetLanguage}
        sourceCode={sourceCode}
        outputCode={outputCode}
      />
    </>
  );
}

export default Converter;
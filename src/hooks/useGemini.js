import { useState } from "react";

import geminiService from "../services/gemini";

import {
  buildCodeConversionPrompt,
  buildCodeExplanationPrompt,
  buildCodeOptimizationPrompt,
  buildBugDetectionPrompt,
} from "../services/prompts";

function useGemini() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  function reset() {
    setLoading(false);
    setError("");
    setResponse("");
  }

  async function generate(prompt) {
    if (!prompt?.trim()) {
      const message = "AI prompt cannot be empty.";

      setError(message);
      throw new Error(message);
    }

    try {
      setLoading(true);
      setError("");

      const result = await geminiService.generate(prompt);

      setResponse(result);

      return result;
    } catch (err) {
      const message =
        err?.message ||
        "Something went wrong while communicating with Gemini AI.";

      setError(message);

      throw new Error(message);
    } finally {
      setLoading(false);
    }
  }

  async function convertCode({
    sourceLanguage,
    targetLanguage,
    code,
  }) {
    return generate(
      buildCodeConversionPrompt({
        sourceLanguage,
        targetLanguage,
        code,
      })
    );
  }

  async function explainCode({ language, code }) {
    return generate(
      buildCodeExplanationPrompt({
        language,
        code,
      })
    );
  }

  async function optimizeCode({ language, code }) {
    return generate(
      buildCodeOptimizationPrompt({
        language,
        code,
      })
    );
  }

  async function detectBugs({ language, code }) {
    return generate(
      buildBugDetectionPrompt({
        language,
        code,
      })
    );
  }

  return {
    loading,
    error,
    response,
    reset,
    generate,
    convertCode,
    explainCode,
    optimizeCode,
    detectBugs,
  };
}

export default useGemini;
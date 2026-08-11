import { useState } from "react";

import geminiService from "../services/gemini";

import {
  buildCodeConversionPrompt,
  buildCodeExplanationPrompt,
  buildCodeOptimizationPrompt,
} from "../services/prompts";

function useGemini() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [response, setResponse] = useState("");

  /**
   * Reset AI state
   */
  function reset() {
    setLoading(false);
    setError("");
    setResponse("");
  }

  /**
   * Generic AI request
   */
  async function generate(prompt) {
    if (!prompt?.trim()) {
      const message = "AI prompt cannot be empty.";

      setError(message);

      throw new Error(message);
    }

    try {
      setLoading(true);
      setError("");

      const result =
        await geminiService.generate(prompt);

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

  /**
   * Convert source code
   */
  async function convertCode({
    sourceLanguage,
    targetLanguage,
    code,
  }) {
    const prompt = buildCodeConversionPrompt({
      sourceLanguage,
      targetLanguage,
      code,
    });

    return generate(prompt);
  }

  /**
   * Explain source code
   */
  async function explainCode({
    language,
    code,
  }) {
    const prompt = buildCodeExplanationPrompt({
      language,
      code,
    });

    return generate(prompt);
  }

  /**
   * Optimize source code
   */
  async function optimizeCode({
    language,
    code,
  }) {
    const prompt =
      buildCodeOptimizationPrompt({
        language,
        code,
      });

    return generate(prompt);
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
  };
}

export default useGemini;
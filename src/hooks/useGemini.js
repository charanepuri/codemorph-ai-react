import { useState } from "react";

import geminiService from "../services/gemini";

import {
  buildCodeConversionPrompt,
} from "../services/prompts";

function useGemini() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [response, setResponse] = useState("");

  /**
   * Reset Hook State
   */
  function reset() {
    setLoading(false);
    setError("");
    setResponse("");
  }

  /**
   * Generic AI Request
   */
  async function generate(prompt) {
    try {
      setLoading(true);
      setError("");

      const result =
        await geminiService.generate(prompt);

      setResponse(result);

      return result;
    } catch (err) {
      const message =
        err.message || "Unknown error";

      setError(message);

      throw err;
    } finally {
      setLoading(false);
    }
  }

  /**
   * Convert Source Code
   */
  async function convertCode({
    sourceLanguage,
    targetLanguage,
    code,
  }) {
    const prompt =
      buildCodeConversionPrompt({
        sourceLanguage,
        targetLanguage,
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
  };
}

export default useGemini;
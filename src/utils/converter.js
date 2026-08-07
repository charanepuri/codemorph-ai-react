/**
 * ==========================================================
 * CodeMorph AI
 * Converter Utilities
 * ==========================================================
 */

import languages from "../data/languages";

export function validateConversion({
  sourceLanguage,
  targetLanguage,
  sourceCode,
}) {
  if (!sourceCode.trim()) {
    return {
      valid: false,
      message: "Please enter source code.",
    };
  }

  if (sourceLanguage === targetLanguage) {
    return {
      valid: false,
      message: "Source and target languages cannot be the same.",
    };
  }

  return {
    valid: true,
    message: "",
  };
}

export function getDownloadFileName(
  sourceLanguage,
  targetLanguage
) {
  const target = languages.find(
    (item) => item.monaco === targetLanguage
  );

  const extension = target?.extension || ".txt";

  return `${sourceLanguage}-to-${targetLanguage}${extension}`;
}

export function getConversionTime() {
  return new Date().toLocaleString();
}
/**
 * ==========================================================
 * CodeMorph AI
 * Code Statistics Utility
 * ==========================================================
 */

export function calculateCodeStats(code = "", language = "") {
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
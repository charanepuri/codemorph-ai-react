/**
 * ==========================================================
 * CodeMorph AI
 * AI Response Parser
 * ==========================================================
 */

const CODE_BLOCK_REGEX = /```(?:[\w#+.-]+)?\s*([\s\S]*?)```/;

function normalizeLineEndings(text) {
  return text.replace(/\r\n/g, "\n");
}

function removeTrailingWhitespace(text) {
  return text
    .split("\n")
    .map((line) => line.replace(/\s+$/g, ""))
    .join("\n");
}

function extractCodeBlock(text) {
  const match = text.match(CODE_BLOCK_REGEX);

  if (match) {
    return match[1];
  }

  return text;
}

function trimEmptyLines(text) {
  return text.trim();
}

export function parseAIResponse(response) {
  if (!response) {
    return "";
  }

  let cleaned = response;

  cleaned = normalizeLineEndings(cleaned);

  cleaned = extractCodeBlock(cleaned);

  cleaned = removeTrailingWhitespace(cleaned);

  cleaned = trimEmptyLines(cleaned);

  return cleaned;
}
/**
 * ==========================================================
 * CodeMorph AI
 * AI Response Parser
 * ==========================================================
 */

const CODE_BLOCK_REGEX = /```(?:[\w#+.-]+)?\s*([\s\S]*?)```/;

export function parseAIResponse(response) {
  if (!response) {
    return "";
  }

  let cleaned = response.replace(/\r\n/g, "\n");

  const match = cleaned.match(CODE_BLOCK_REGEX);

  if (match) {
    cleaned = match[1];
  }

  cleaned = cleaned
    .split("\n")
    .map((line) => line.replace(/\s+$/g, ""))
    .join("\n")
    .trim();

  return cleaned;
}
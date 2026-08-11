/**
 * ==========================================================
 * CodeMorph AI
 * Explanation Response Parser
 * ==========================================================
 */

const SECTION_HEADINGS = {
  summary: "Overall Summary",
  lineByLine: "Line-by-Line Explanation",
  flow: "Program Flow",
  beginner: "Beginner Explanation",
  advanced: "Advanced Explanation",
};

/**
 * Normalize AI response line endings.
 */
function normalizeContent(content = "") {
  return content
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

/**
 * Find a section heading.
 *
 * Supports:
 *
 * # Heading
 * ## Heading
 * ### Heading
 */
function findHeading(content, heading) {
  const escapedHeading = heading.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  const pattern = new RegExp(
    `^#{1,3}\\s+${escapedHeading}\\s*$`,
    "im"
  );

  return pattern.exec(content);
}

/**
 * Extract one explanation section.
 */
export function extractExplanationSection(
  content,
  section
) {
  if (!content?.trim()) {
    return "";
  }

  const heading =
    SECTION_HEADINGS[section];

  if (!heading) {
    return "";
  }

  const normalized = normalizeContent(content);

  const match = findHeading(
    normalized,
    heading
  );

  if (!match || match.index === undefined) {
    return "";
  }

  const startIndex =
    match.index + match[0].length;

  const remaining =
    normalized.slice(startIndex);

  /**
   * Find the next top-level section.
   *
   * We intentionally look for # headings,
   * rather than ### headings, because
   * line-by-line explanations may contain
   * ### Line 1, ### Line 2, etc.
   */
  const nextSectionMatch =
    remaining.match(
      /\n#{1,2}\s+[^\n]+/
    );

  if (!nextSectionMatch) {
    return remaining.trim();
  }

  return remaining
    .slice(0, nextSectionMatch.index)
    .trim();
}

/**
 * Extract all explanation sections.
 */
export function parseExplanationResponse(
  content
) {
  return {
    summary: extractExplanationSection(
      content,
      "summary"
    ),

    lineByLine: extractExplanationSection(
      content,
      "lineByLine"
    ),

    flow: extractExplanationSection(
      content,
      "flow"
    ),

    beginner: extractExplanationSection(
      content,
      "beginner"
    ),

    advanced: extractExplanationSection(
      content,
      "advanced"
    ),
  };
}

/**
 * Check whether all required sections
 * were returned by the AI.
 */
export function validateExplanationResponse(
  content
) {
  const sections =
    parseExplanationResponse(content);

  const missingSections = Object.entries(
    sections
  )
    .filter(([, value]) => !value)
    .map(([key]) => SECTION_HEADINGS[key]);

  return {
    valid: missingSections.length === 0,

    sections,

    missingSections,
  };
}
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
 * Normalize a heading for comparison.
 */
function normalizeHeading(heading = "") {
  return heading
    .replace(/^#{1,6}\s*/, "")
    .replace(/\*\*/g, "")
    .replace(/[`*_]/g, "")
    .replace(/:$/, "")
    .trim()
    .toLowerCase();
}

/**
 * Check whether a line matches a section heading.
 */
function isSectionHeading(line, heading) {
  return (
    normalizeHeading(line) ===
    normalizeHeading(heading)
  );
}

/**
 * Find the starting line of a section.
 */
function findHeadingLine(lines, heading) {
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();

    if (!line) {
      continue;
    }

    if (isSectionHeading(line, heading)) {
      return index;
    }
  }

  return -1;
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

  const heading = SECTION_HEADINGS[section];

  if (!heading) {
    return "";
  }

  const normalized = normalizeContent(content);
  const lines = normalized.split("\n");

  const startLine = findHeadingLine(
    lines,
    heading
  );

  if (startLine === -1) {
    return "";
  }

  const sectionLines = [];

  for (
    let index = startLine + 1;
    index < lines.length;
    index += 1
  ) {
    const currentLine = lines[index].trim();

    const isAnotherSection =
      Object.values(SECTION_HEADINGS).some(
        (sectionHeading) =>
          isSectionHeading(
            currentLine,
            sectionHeading
          )
      );

    if (isAnotherSection) {
      break;
    }

    sectionLines.push(lines[index]);
  }

  return sectionLines.join("\n").trim();
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
    .map(
      ([key]) => SECTION_HEADINGS[key]
    );

  return {
    valid: missingSections.length === 0,
    sections,
    missingSections,
  };
}
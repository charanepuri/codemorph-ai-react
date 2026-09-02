/**
 * ==========================================================
 * CodeMorph AI
 * Bug Detection Response Parser
 * ==========================================================
 */

const DEFAULT_SUMMARY = {
  total: 0,
  critical: 0,
  high: 0,
  medium: 0,
  low: 0,
};

function cleanResponse(content = "") {
  return content
    .replace(/\r\n/g, "\n")
    .trim();
}

function removeCodeFence(content) {
  return content
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
}

function normalizeBug(bug, index) {
  return {
    id: bug?.id || `bug-${index + 1}`,

    severity: [
      "critical",
      "high",
      "medium",
      "low",
    ].includes(
      String(bug?.severity).toLowerCase()
    )
      ? String(bug.severity).toLowerCase()
      : "medium",

    line:
      Number.isFinite(Number(bug?.line))
        ? Number(bug.line)
        : null,

    type: bug?.type || "other",

    title:
      bug?.title ||
      "Potential issue detected",

    description:
      bug?.description ||
      "No detailed description was provided.",

    fix:
      bug?.fix ||
      "Review this section of the code.",
  };
}

function calculateSummary(bugs) {
  return bugs.reduce(
    (summary, bug) => {
      summary[bug.severity] += 1;
      summary.total += 1;

      return summary;
    },
    { ...DEFAULT_SUMMARY }
  );
}

export function parseBugResponse(content) {
  if (!content?.trim()) {
    throw new Error(
      "The AI returned an empty bug analysis."
    );
  }

  try {
    const cleaned = removeCodeFence(
      cleanResponse(content)
    );

    const parsed = JSON.parse(cleaned);

    if (!parsed || typeof parsed !== "object") {
      throw new Error(
        "Invalid bug analysis format."
      );
    }

    const bugs = Array.isArray(parsed.bugs)
      ? parsed.bugs.map(normalizeBug)
      : [];

    const correctedCode =
      typeof parsed.correctedCode === "string"
        ? parsed.correctedCode
        : "";

    return {
      summary: calculateSummary(bugs),

      bugs,

      correctedCode,
    };
  } catch {
    throw new Error(
      "Gemini returned an invalid bug analysis. Please try again."
    );
  }
}
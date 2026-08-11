import { useMemo } from "react";

import "./OptimizationComparison.css";

function normalizeLines(code = "") {
  return code.replace(/\r\n/g, "\n").split("\n");
}

function compareLines(originalLines, optimizedLines) {
  const maxLength = Math.max(
    originalLines.length,
    optimizedLines.length
  );

  return Array.from(
    { length: maxLength },
    (_, index) => {
      const original =
        originalLines[index] ?? "";

      const optimized =
        optimizedLines[index] ?? "";

      let status = "same";

      if (!original && optimized) {
        status = "added";
      } else if (original && !optimized) {
        status = "removed";
      } else if (original !== optimized) {
        status = "changed";
      }

      return {
        lineNumber: index + 1,
        original,
        optimized,
        status,
      };
    }
  );
}

function OptimizationComparison({
  originalCode = "",
  optimizedCode = "",
}) {
  const comparison = useMemo(() => {
    const originalLines =
      normalizeLines(originalCode);

    const optimizedLines =
      normalizeLines(optimizedCode);

    return compareLines(
      originalLines,
      optimizedLines
    );
  }, [originalCode, optimizedCode]);

  if (
    !originalCode.trim() &&
    !optimizedCode.trim()
  ) {
    return null;
  }

  return (
    <section className="optimization-comparison">
      <div className="optimization-comparison-header">
        <div>
          <h2>Code Comparison</h2>

          <p>
            Compare the original code with the
            optimized version line by line.
          </p>
        </div>
      </div>

      <div className="comparison-table">
        <div className="comparison-column-header">
          <span>Original Code</span>

          <span>Optimized Code</span>
        </div>

        <div className="comparison-body">
          {comparison.map((line) => (
            <div
              key={line.lineNumber}
              className={`comparison-row comparison-${line.status}`}
            >
              <div className="comparison-cell">
                <span className="line-number">
                  {line.lineNumber}
                </span>

                <code>
                  {line.original ||
                    " "}
                </code>
              </div>

              <div className="comparison-cell">
                <span className="line-number">
                  {line.lineNumber}
                </span>

                <code>
                  {line.optimized ||
                    " "}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="comparison-legend">
        <span>
          <i className="legend-same" />
          Unchanged
        </span>

        <span>
          <i className="legend-changed" />
          Changed
        </span>

        <span>
          <i className="legend-added" />
          Added
        </span>

        <span>
          <i className="legend-removed" />
          Removed
        </span>
      </div>
    </section>
  );
}

export default OptimizationComparison;
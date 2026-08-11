import {
  FaArrowDown,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";

import { calculateCodeStats } from "../../utils/codeStats";

import "./OptimizationStats.css";

function OptimizationStats({
  sourceCode = "",
  optimizedCode = "",
  language = "",
}) {
  const sourceStats =
    calculateCodeStats(
      sourceCode,
      language
    );

  const optimizedStats =
    calculateCodeStats(
      optimizedCode,
      language
    );

  const lineDifference =
    sourceStats.lines -
    optimizedStats.lines;

  const characterDifference =
    sourceStats.characters -
    optimizedStats.characters;

  const wordDifference =
    sourceStats.words -
    optimizedStats.words;

  const getDifferenceClass = (
    difference
  ) => {
    if (difference > 0) {
      return "positive";
    }

    if (difference < 0) {
      return "negative";
    }

    return "neutral";
  };

  return (
    <section className="optimization-stats">
      <div className="optimization-stats-header">
        <div className="optimization-stats-icon">
          <FaCode />
        </div>

        <div>
          <h2>Optimization Statistics</h2>

          <p>
            Compare the original and optimized
            code.
          </p>
        </div>
      </div>

      <div className="optimization-stats-table">
        <div className="optimization-stats-row optimization-stats-heading">
          <span>Metric</span>

          <span>Original</span>

          <span>Optimized</span>

          <span>Difference</span>
        </div>

        <div className="optimization-stats-row">
          <span>Lines</span>

          <strong>
            {sourceStats.lines}
          </strong>

          <strong>
            {optimizedStats.lines}
          </strong>

          <span
            className={getDifferenceClass(
              lineDifference
            )}
          >
            {lineDifference > 0 && (
              <FaArrowDown />
            )}

            {lineDifference < 0 && (
              <FaArrowUp />
            )}

            {lineDifference > 0
              ? `${lineDifference} fewer`
              : lineDifference < 0
              ? `${Math.abs(
                  lineDifference
                )} more`
              : "No change"}
          </span>
        </div>

        <div className="optimization-stats-row">
          <span>Characters</span>

          <strong>
            {sourceStats.characters}
          </strong>

          <strong>
            {optimizedStats.characters}
          </strong>

          <span
            className={getDifferenceClass(
              characterDifference
            )}
          >
            {characterDifference > 0
              ? `${characterDifference} fewer`
              : characterDifference < 0
              ? `${Math.abs(
                  characterDifference
                )} more`
              : "No change"}
          </span>
        </div>

        <div className="optimization-stats-row">
          <span>Words</span>

          <strong>
            {sourceStats.words}
          </strong>

          <strong>
            {optimizedStats.words}
          </strong>

          <span
            className={getDifferenceClass(
              wordDifference
            )}
          >
            {wordDifference > 0
              ? `${wordDifference} fewer`
              : wordDifference < 0
              ? `${Math.abs(
                  wordDifference
                )} more`
              : "No change"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default OptimizationStats;
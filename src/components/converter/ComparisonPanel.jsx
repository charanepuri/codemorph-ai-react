import "./ComparisonPanel.css";

function ComparisonPanel({
  sourceLanguage,
  targetLanguage,
  sourceCode,
  outputCode,
}) {
  const sourceEmpty = !sourceCode.trim();
  const outputEmpty = !outputCode.trim();

  return (
    <section className="comparison-panel">
      <div className="comparison-header">
        <h3>Conversion Summary</h3>

        <span>
          {sourceLanguage.toUpperCase()} →{" "}
          {targetLanguage.toUpperCase()}
        </span>
      </div>

      <div className="comparison-grid">
        <div className="comparison-card">
          <h4>Source Code</h4>

          <p>
            {sourceEmpty
              ? "No source code available."
              : "Source code ready for comparison."}
          </p>
        </div>

        <div className="comparison-card">
          <h4>Converted Code</h4>

          <p>
            {outputEmpty
              ? "No converted code available."
              : "Conversion completed successfully."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ComparisonPanel;
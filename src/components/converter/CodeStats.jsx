import "./CodeStats.css";

function CodeStats({ title, stats }) {
  return (
    <div className="code-stats">
      <h3>{title}</h3>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Language</span>
          <strong>{stats.language}</strong>
        </div>

        <div className="stat-card">
          <span>Lines</span>
          <strong>{stats.lines}</strong>
        </div>

        <div className="stat-card">
          <span>Characters</span>
          <strong>{stats.characters}</strong>
        </div>

        <div className="stat-card">
          <span>Words</span>
          <strong>{stats.words}</strong>
        </div>
      </div>
    </div>
  );
}

export default CodeStats;
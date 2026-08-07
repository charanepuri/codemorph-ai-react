import "./StatusBar.css";

function StatusBar({
  language,
  lines = 0,
}) {
  return (
    <footer className="status-bar">

      <div>

        Ready

      </div>

      <div className="status-right">

        <span>

          {language.toUpperCase()}

        </span>

        <span>

          {lines} Lines

        </span>

      </div>

    </footer>
  );
}

export default StatusBar;
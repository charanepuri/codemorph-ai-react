import {
  FaBars,
  FaGithub,
} from "react-icons/fa";

import "./Navbar.css";
import ThemeToggle from "../settings/ThemeToggle";

function Navbar({
  toggleSidebar,
}) {
  return (
    <header className="navbar">

      <div className="navbar-left">

        <button
          className="menu-button"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        <div className="brand">

          <div className="brand-logo">
            ⚡
          </div>

          <div>

            <h2>CodeMorph AI</h2>

            <p>
              AI-Powered Code Translation
            </p>

          </div>

        </div>

      </div>

      <div className="navbar-right">

        <ThemeToggle />

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          <FaGithub />

          <span>GitHub</span>

        </a>

      </div>

    </header>
  );
}

export default Navbar;
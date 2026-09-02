import { FaBars } from "react-icons/fa";

import "./Navbar.css";
import ThemeToggle from "../settings/ThemeToggle";

function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button
          type="button"
          className="menu-button"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
        >
          <FaBars />
        </button>

        <div className="brand">
          <div className="brand-logo" aria-hidden="true">
            ⚡
          </div>

          <h2>CodeMorph AI</h2>
        </div>
      </div>

      <div className="navbar-right">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaExchangeAlt,
  FaLightbulb,
  FaBolt,
  FaBug,
  FaCog,
  FaInfoCircle,
} from "react-icons/fa";

import "./Sidebar.css";

const navigation = [
  {
    title: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    title: "Converter",
    path: "/converter",
    icon: FaExchangeAlt,
  },
  {
    title: "Explain",
    path: "/explain",
    icon: FaLightbulb,
  },
  {
    title: "Optimizer",
    path: "/optimizer",
    icon: FaBolt,
  },
  {
    title: "Bug Detector",
    path: "/bug-detector",
    icon: FaBug,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: FaCog,
  },
  {
    title: "About",
    path: "/about",
    icon: FaInfoCircle,
  },
];

function Sidebar({ sidebarOpen, closeSidebar }) {
  return (
    <>
      <div
        className={`sidebar-overlay ${
          sidebarOpen ? "show-overlay" : ""
        }`}
        onClick={closeSidebar}
        aria-hidden={!sidebarOpen}
      />

      <aside
        className={`sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
        aria-label="Main navigation"
      >
        <div className="sidebar-header">
          <h3>Navigation</h3>
        </div>

        <nav className="sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  isActive
                    ? "sidebar-link active"
                    : "sidebar-link"
                }
              >
                <Icon
                  className="sidebar-icon"
                  aria-hidden="true"
                />

                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
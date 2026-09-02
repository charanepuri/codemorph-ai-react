import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaExchangeAlt,
  FaLightbulb,
  FaBolt,
  FaBug,
  FaFileAlt,
  FaChartLine,
  FaHistory,
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
    title: "Bug Finder",
    path: "/bug-finder",
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
      {/* Mobile Overlay */}
      <div
        className={`sidebar-overlay ${
          sidebarOpen ? "show-overlay" : ""
        }`}
        onClick={closeSidebar}
      />

      <aside
        className={`sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
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
                <Icon className="sidebar-icon" />

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
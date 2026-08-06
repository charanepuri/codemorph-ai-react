import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./Layout.css";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app-layout">
      <Navbar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="app-body">
        <Sidebar
          sidebarOpen={sidebarOpen}
          closeSidebar={closeSidebar}
        />

        <main
          className="app-content"
          onClick={closeSidebar}
        >
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
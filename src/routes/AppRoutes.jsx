import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import Converter from "../pages/Converter/Converter";
import Explain from "../pages/Explain/Explain";
import Optimizer from "../pages/Optimizer/Optimizer";
import BugDetector from "../pages/BugDetector/BugDetector";
import Settings from "../pages/Settings/Settings";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/explain" element={<Explain />} />
        <Route path="/optimizer" element={<Optimizer />} />
        <Route
          path="/bug-detector"
          element={<BugDetector />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
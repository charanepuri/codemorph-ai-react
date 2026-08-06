import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import Converter from "../pages/Converter/Converter";
import Explain from "../pages/Explain/Explain";
import Optimizer from "../pages/Optimizer/Optimizer";
import BugFinder from "../pages/BugFinder/BugFinder";
import Documentation from "../pages/Documentation/Documentation";
import Complexity from "../pages/Complexity/Complexity";
import History from "../pages/History/History";
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
        <Route path="/bug-finder" element={<BugFinder />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/complexity" element={<Complexity />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
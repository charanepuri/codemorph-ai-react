import {
  FaHome,
  FaExchangeAlt,
  FaLightbulb,
  FaRocket,
  FaBug,
  FaFileAlt,
  FaChartLine,
  FaHistory,
  FaCog,
  FaInfoCircle,
} from "react-icons/fa";

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
    icon: FaRocket,
  },
  {
    title: "Bug Finder",
    path: "/bug-finder",
    icon: FaBug,
  },
  {
    title: "Documentation",
    path: "/documentation",
    icon: FaFileAlt,
  },
  {
    title: "Complexity",
    path: "/complexity",
    icon: FaChartLine,
  },
  {
    title: "History",
    path: "/history",
    icon: FaHistory,
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

export default navigation;
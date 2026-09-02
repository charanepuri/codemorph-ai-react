import {
  FaExchangeAlt,
  FaLightbulb,
  FaBolt,
  FaBug,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Button from "../../components/common/Button";
import Card from "../../components/common/Card";

import "./Home.css";

const features = [
  {
    icon: <FaExchangeAlt />,
    title: "Code Conversion",
    description:
      "Convert source code between multiple programming languages using AI.",
  },
  {
    icon: <FaLightbulb />,
    title: "Code Explanation",
    description:
      "Understand complex code with beginner-friendly AI explanations.",
  },
  {
    icon: <FaBolt />,
    title: "Code Optimization",
    description:
      "Improve readability, performance, maintainability, and coding practices.",
  },
  {
    icon: <FaBug />,
    title: "Bug Detection",
    description:
      "Identify syntax, logic, runtime, type, security, and performance issues.",
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <span className="hero-badge">🚀 AI Powered Developer Platform</span>

        <h1>
          Transform, Understand & Improve Code
          <span> with Artificial Intelligence</span>
        </h1>

        <p>
          CodeMorph AI helps developers convert code between languages,
          understand unfamiliar code, optimize existing code, and detect
          potential bugs from one modern workspace.
        </p>

        <div className="hero-actions">
          <Link to="/converter">
            <Button size="lg">
              Start Converting
              <FaArrowRight />
            </Button>
          </Link>

          <Link to="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <section className="stats">
        <Card>
          <h2>15+</h2>
          <p>Programming Languages</p>
        </Card>

        <Card>
          <h2>4</h2>
          <p>AI Developer Tools</p>
        </Card>

        <Card>
          <h2>24/7</h2>
          <p>AI Assistance</p>
        </Card>

        <Card>
          <h2>100%</h2>
          <p>Browser Based</p>
        </Card>
      </section>

      <section className="features">
        <div className="section-header">
          <h2>AI Tools for Developers</h2>

          <p>
            One platform for code conversion, explanation, optimization, and
            bug detection.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <Card key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
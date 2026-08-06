import Card from "../../components/common/Card";
import PageHeader from "../../components/common/PageHeader";

import "./About.css";

function About() {
  return (
    <>
      <PageHeader
        title="About CodeMorph AI"
        description="An AI-powered developer platform for modern software engineers."
      />

      <Card>
        <h2>Project Overview</h2>

        <p>
          CodeMorph AI helps developers translate source code between
          programming languages, explain unfamiliar code, optimize
          performance, detect bugs, generate documentation, and analyze
          algorithm complexity—all from one unified workspace.
        </p>

        <h3>Technology Stack</h3>

        <ul>
          <li>React</li>
          <li>Vite</li>
          <li>JavaScript</li>
          <li>Monaco Editor</li>
          <li>Gemini AI</li>
        </ul>
      </Card>
    </>
  );
}

export default About;
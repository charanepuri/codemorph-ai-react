import "./AboutHero.css";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__content">
        <span className="about-hero__label">About the Project</span>

        <h1 className="about-hero__title">
          CodeMorph <span>AI</span>
        </h1>

        <p className="about-hero__tagline">
          Transform, understand, optimize, and debug your code with AI.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;
import "./About.css";
import AboutHero from "../../components/about/AboutHero";
import ProjectOverview from "../../components/about/ProjectOverview";
import ProjectInformation from "../../components/about/ProjectInformation";
import DeveloperProfile from "../../components/about/DeveloperProfile";
import ProgrammingSkills from "../../components/about/ProgrammingSkills";
import ConnectSection from "../../components/about/ConnectSection";

function About() {
  return (
    <main className="about-page">
      <AboutHero />

      <ProjectOverview />

      <ProjectInformation />

      <DeveloperProfile />

      <ProgrammingSkills />

      <ConnectSection />
    </main>
  );
}

export default About;
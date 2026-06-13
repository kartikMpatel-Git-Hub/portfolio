import { portfolioData } from "../portfolio-data";
import { Header, Hero } from "./components/Header";
import { AboutSection, AchievementsSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { Footer } from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero personal={portfolioData.personal} about={portfolioData.about} />
      <AboutSection about={portfolioData.about} />
      <ExperienceSection experience={portfolioData.experience} />
      <SkillsSection skills={portfolioData.skills} />
      <ProjectsSection projects={portfolioData.projects} />
      <EducationSection education={portfolioData.education} />
      <AchievementsSection achievements={portfolioData.achievements} />
      <Footer personal={portfolioData.personal} />
    </div>
  );
}

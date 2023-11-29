import { Sidebar } from "./Sidebar/Sidebar"
import { MainContent } from "./MainContent/MainContent"
import { FeaturedProjects } from "./FeaturedProjects/FeaturedProjects"
import { ProfessionalExperience } from "./ProfessionalExperience/ProfessionalExperience";

import './Home.scss';

export const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="HomeHero">
        <Sidebar />
        <MainContent />
      </div>
      <div className="HomeProjects">
        <FeaturedProjects />
      </div>
      <div className="HomeExperience">
        <ProfessionalExperience />
      </div>
    </div>
  )
}

import MainContent from "./MainContent/MainContent"
import Sidebar from "./Sidebar/Sidebar"
import { FeaturedProjects } from "./FeaturedProjects/FeaturedProjects"

import './Home.scss';


export const Home = () => {
  return (
    <div className="HomeContainer">
      <Sidebar />
      <MainContent />
      <FeaturedProjects />    

    </div>
  )
}

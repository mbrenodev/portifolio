import MainContent from "../../components/MainContent/MainContent"
import { NavBar } from "../../components/NavBar/NavBar"
import Sidebar from "../../components/Sidebar/Sidebar"

export const Home = () => {
  return (
    <div id='portfolio'>
      <NavBar />
      <Sidebar />
      <MainContent />
    </div>
  )
}

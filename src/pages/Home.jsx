import MainContent from "../components/MainContent"
import { NavBar } from "../components/NavBar"
import Sidebar from "../components/Sidebar"

export const Home = () => {
  return (
    <div id='portfolio'>
      <NavBar />
      <Sidebar />
      <MainContent />
    </div>
  )
}

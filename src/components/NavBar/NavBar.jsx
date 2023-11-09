
import { Link } from "react-router-dom";
import "./NavBar.sass";

export const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/project">Projetos</Link>
      <Link to="/about">Sobre</Link>
    </div>
  )
}

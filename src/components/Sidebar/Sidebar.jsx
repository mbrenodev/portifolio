import SocialNetworkContainer from "../SocialNetworkContainer";
import InformationContainer from "../InformationContainer/InformationContainer.jsx";

import Avatar from "../../img/chs.png";

import "./Sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Chs" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
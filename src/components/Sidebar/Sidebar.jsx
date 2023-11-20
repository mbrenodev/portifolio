import { SocialNetwork } from "./SocialNetwork/SocialNetwork.jsx";
import { Information } from "./Information/Information.jsx";

import Avatar from "../../img/chs.png";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Chs" />
      <p className="title">Desenvolvedor</p>
      <SocialNetwork />
      <Information />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
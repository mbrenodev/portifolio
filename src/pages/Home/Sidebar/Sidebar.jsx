import { AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import Avatar from "../../../img/chs.png";

import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <aside className="SidebarContainer">
      <img src={Avatar} alt="Chs" />
      <p className="SidebarTitle">Desenvolvedor Web</p>
      <section className="SidebarInfoContainer">
        <div className="SidebarInfoCard">
          <AiOutlineWhatsApp id="whatsapp-icon" />
          <div>
            <h3>Telefone</h3>
            <p>(31)99999-9999</p>
          </div>
        </div>
        <div className="SidebarInfoCard">
          <AiOutlineMail id="email-icon" />
          <div>
            <h3>E-mail</h3>
            <p>christiecardoso@hotmail.com</p>
          </div>
        </div>
        <div className="SidebarInfoCard">
          <AiFillEnvironment id="pin-icon" />
          <div>
            <h3>Localização</h3>
            <p>Contagem / MG</p>
          </div>
        </div>
      </section>
      <a href="#" className="SidebarBtn">
        Download currículo
      </a>
    </aside>
  );
};

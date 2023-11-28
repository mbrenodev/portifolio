
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import Avatar from "../../../img/chs.png";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Chs" />
      <p className="title">Desenvolvedor</p>
      <section id="information">
        <div className="info-card">
          <AiFillPhone id="phone-icon" />
          <div>
            <h3>Telefone</h3>
            <p>(31)99999-9999</p>
          </div>
        </div>
        <div className="info-card">
          <AiOutlineMail id="email-icon" />
          <div>
            <h3>E-mail</h3>
            <p>christie@gmail.com</p>
          </div>
        </div>
        <div className="info-card">
          <AiFillEnvironment id="pin-icon" />
          <div>
            <h3>Localização</h3>
            <p>Contagem / MG</p>
          </div>
        </div>
      </section>
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
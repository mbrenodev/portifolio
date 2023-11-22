import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import './Footer.scss';

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

export const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2023 Todos os direitos reservados</p>

      <section id="social-networks">
        {socialNetworks.map((network) => (
          <a href="#" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))}
      </section>
    </div>
  );
};


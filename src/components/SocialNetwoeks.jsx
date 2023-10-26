// Importando os ícones de mídias sociais do pacote 'react-icons/fa'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

// Importando os estilos do arquivo 'socialnetworks.sass'
import '../styles/components/socialnetworks.sass';

// Definindo uma matriz de redes sociais com dados dinâmicos  "Array de Objeto "
const socialNetworks = [
  { name: "instagram", icon: <FaInstagram /> },             
  { name: "linkedin", icon: <FaLinkedinIn /> },             
  { name: "github", icon: <FaGithub /> },                   
];

// Definindo o componente SocialNetworks
const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {/* Mapeando a matriz socialNetworks e renderizando um elemento 'a' para cada objeto */}
      {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks;

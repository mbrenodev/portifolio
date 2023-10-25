import Avatar from '../img/chs.png';

import '../styles/components/slidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="chs" />
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">Download do Currículo</a>
    </aside>
  )
}

export default Sidebar
import './About.scss';

import aboutPromoImg from '../../img/chs.png';
import { AboutText } from './AboutText/AboutText';
import { TechSkills } from './TechSckills/TechSckills';
import { GithubCalendar } from './GitHubCalendar/GitHubCalendar';


export const About = () => {
  return (
    <section className='aboutContainer'>
      <div className='about'>
        <div>
          <h1 className='aboutTitle'>
            Deixe-me <b className='purple'>apresentar</b>
          </h1>
          <AboutText />
        </div>

        <div className='aboutImg'>
          <img src={aboutPromoImg} alt="about" />
        </div>
      </div>

      <h2 className='skills'>
        <b className='purple'>Habilidades</b> profissionais
      </h2>
      <TechSkills />

      <h2 className='githubActivity'>
        <b className='purple'>Contribuições</b>
      </h2>
      <GithubCalendar />

    </section>
  )
}

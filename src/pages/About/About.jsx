import './About.scss';

import aboutPromoImg from '../../img/chs.png';
import { AboutText } from './AboutText/AboutText';
import { TechSkills } from './TechSckills/TechSckills';
import { GithubCalendar } from './GitHubCalendar/GitHubCalendar';


export const About = () => {
  return (
    <section className="about-container">
      <div className='content'>
        <div className='about'>
          <div>
            <h1 className='title'>
              Know Who <b className='purple'>I'M</b>
            </h1>
            <AboutText />
          </div>

          <div className='aboutImg'>
            <img src={aboutPromoImg} alt="about" />
          </div>
        </div>

        <h2 className='skills'>
          Professional <b className='purple'>Skills</b>
        </h2>
        <TechSkills />

        <h2 className='githubActivity'>
          Days I <b className='purple'>Code</b>
        </h2>
        <GithubCalendar />
      </div>
    </section>
  )
}

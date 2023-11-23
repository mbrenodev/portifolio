import './TechSkills.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiAmazonaws,
} from 'react-icons/si';

export const TechSkills = () => {
  return (
    <ul className='container-sckills'>
      <li className='techIcon'>
        <DiJavascript1 />
      </li>
      <li className='techIcon'>
        <SiTypescript />
      </li>
      <li className='techIcon'>
        <DiNodejs />
      </li>
      <li className='techIcon'>
        <DiReact />
      </li>
      <li className='techIcon'>
        <DiMongodb />
      </li>
      <li className='techIcon'>
        <DiSass />
      </li>
      <li className='techIcon'>
        <SiAmazonaws />
      </li>
      <li className='techIcon'>
        <SiRedux />
      </li>
      <li className='techIcon'>
        <SiSocketdotio />
      </li>
      <li className='techIcon'>
        <DiGit />
      </li>
    </ul>
  );
};


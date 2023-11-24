import './TechSkills.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  DiMysql,
  DiWordpress

} from 'react-icons/di';
import {
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiJest
} from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";

export const TechSkills = () => {
  return (
    <ul className='sckillsContainer'>
      <li className='techIcon'>
        <DiJavascript1 />
      </li>
      <li className='techIcon'>
        <SiTypescript />
      </li>
      <li className='techIcon'>
        <DiReact />
      </li>
      <li className='techIcon'>
        <TbBrandNextjs />
      </li>
      <li className='techIcon'>
        <DiNodejs />
      </li>
      <li className='techIcon'>
        <DiMongodb />
      </li>
      <li className='techIcon'>
        <DiMysql />
      </li>
      <li className='techIcon'>
        <DiSass />
      </li>
      <li className='techIcon'>
        <SiTailwindcss />
      </li>
      <li className='techIcon'>
        <DiWordpress />
      </li>
      <li className='techIcon'>
        <DiGit />
      </li>
      <li className='techIcon'>
        <SiPostman />
      </li>
      <li className='techIcon'>
        <SiJest />
      </li>

    </ul>
  );
};


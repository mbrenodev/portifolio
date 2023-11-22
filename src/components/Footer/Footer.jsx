import './Footer.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='container'>
      <div className='copyright'>
        <h1>© 2023 Todos os direitos reservados</h1>
      </div>

      <div className='bod'>
        <ul className='socialIcons'>
          <li>
            <a
              href="https://github.com/ChristieCardoso"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/chrisstie.22"
              target="_blank"
              rel="noreferrer"
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/christie-cardoso-164a28235/"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};


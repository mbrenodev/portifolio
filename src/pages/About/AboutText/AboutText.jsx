import { ImPointRight } from 'react-icons/im';

import './AboutText.scss';

export const AboutText = () => {
  return (
    <div className='aboutTextContainer'>
      <p>
        Ola, Meu nome e {' '}
        <span className='purple'>Christie Cardoso </span>
        sou de  <span className='purple'> Belo Horizonte - MG</span>
        <br />
        Estudante de Análise e Desenvolvimento de Sistemas, com previsão de conclusão do curso em junho de 2024.
        <br />
        Habilidades em JavaScript, HTML5/CSS3 e conhecimentos básicos em frameworks como ReactJs e TailwindCss.
        <br />
        Procuro aprofundar conhecimentos por meio de cursos de Front-end na Rocketseat e Udemy. Habilidades em trabalho em equipe, adaptabilidade, comprometimento, criatividade e proatividade.
        <br />
      </p>

      <ul>
        <li className='aboutActivity'>
          <ImPointRight /> Playing Games
        </li>
        <li className='aboutActivity'>
          <ImPointRight /> Reading
        </li>
        <li className='aboutActivity'>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};


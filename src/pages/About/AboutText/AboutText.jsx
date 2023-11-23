import { ImPointRight } from 'react-icons/im';

import './AboutText.scss';

export const AboutText = () => {
  return (
    <div className='card'>
      <p>
        Hi Everyone, I am{' '}
        <span className='purple'>Snaichuk Volodymyr </span>
        from <span className='purple'> Ternopil, Ukraine.</span>
        <br />
        Software engineer with expertise in cross-platform development{' '}
        <br />
        using React Native.
        <br />
        <br />
        I have a Bachelor's degree in Computer Science and
        <br />
        Master's degree in Project Management from Ternopil Academy.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
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


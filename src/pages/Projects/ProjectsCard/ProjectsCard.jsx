import './ProjectsCard.sass';

import { LazyLoadImage } from 'react-lazy-load-image-component';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, title, description }) => {


  return (
    <li className='container'>
      <div className='cardWrapper'>
        <LazyLoadImage
          alt="card-img"
          effect="blur"
          // eslint-disable-next-line react/prop-types
          src={image.src}
          width="70%"
          style={{ minHeight: '15rem' }}
          // eslint-disable-next-line react/prop-types
          placeholderSrc={image.placeholderSrc}
        />


        <div className='cardBox'>
          <h3 className='title'>{title}</h3>
          <p className='description'>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
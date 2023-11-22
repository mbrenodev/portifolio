import { FaRegEye, FaGithub } from "react-icons/fa";

import './ProjectCard.scss';

const ProjectCard = ({ image, title, description, links }) => {

  return (
    <section className='card'>
      <div className='cardWrapper'>
        <img
          alt="card-img"
          src={image.src}
          width="100%"
        />

        <div className='cardBody'>
          <h3 className='title'>{title}</h3>
          <p className='description'>{description}</p>
          <span className="btn-container">
            {links.site ? <a className='btn-project' href={links.site} target='_blank'><FaRegEye /></a> : null}
            {links.repo ? <a className='btn-project' href={links.repo} target='_blank'><FaGithub /></a> : null}
          </span>

        </div>

      </div>
    </section>
  );
};

export default ProjectCard;
import { FaRegEye, FaGithub } from "react-icons/fa";

import './ProjectCard.scss';

const ProjectCard = ({ image, title, description, links }) => {

  return (
    <section className='projectCardContainer'>
      <div className='projectCard'>
        <img
          alt="card-img"
          src={image.src}
          width="100%"
        />

        <div className='projectCardBody'>
          <h3 className='projectTitle'>{title}</h3>
          <p className='projectDescription'>{description}</p>
          <span className="projectBtnContainer">
            {links.site ? <a className='projectBtn' href={links.site} target='_blank'><FaRegEye /></a> : null}
            {links.repo ? <a className='projectBtn' href={links.repo} target='_blank'><FaGithub /></a> : null}
          </span>

        </div>

      </div>
    </section>
  );
};

export default ProjectCard;
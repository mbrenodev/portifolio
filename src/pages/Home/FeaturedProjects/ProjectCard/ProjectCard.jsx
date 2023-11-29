import { FaRegEye, FaGithub } from "react-icons/fa";

import './ProjectCard.scss';

const ProjectCard = ({image, title, description, links }) => {

  return (
    <section className='FeaturedProjectCardContainer'>
      <div className='FeaturedProjectCard'>
        <img
          alt="card-img"
          src={image.src}
          width="100%"
        />

        <div className='FeaturedProjectCardBody'>
          <h3 className='FeaturedProjectCardTitle'>{title}</h3>
          <p className='FeaturedProjectDescription'>{description}</p>
          <span className="FeaturedProjectBtnContainer">
            {links.site ? <a className='projectBtn' href={links.site} target='_blank'><FaRegEye /></a> : null}
            {links.repo ? <a className='projectBtn' href={links.repo} target='_blank'><FaGithub /></a> : null}
          </span>

        </div>

      </div>
    </section>
  );
};

export default ProjectCard;
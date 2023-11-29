

import './FeaturedProjects.scss';


import ProjectCard from './ProjectCard/ProjectCard';

import Project from '../../../data/projects'
import { Link } from 'react-router-dom';

export const FeaturedProjects = () => {
  return (
    <div className='FeaturedProjectContainer'>
      <h1 className='FeaturedProjectTitle'>
        Projetos em Destaque
      </h1>

      <section className='FeaturedProject'>
        {Project.filter((props) => props.id === '1' || props.id === '2').map((props) => (
          <ProjectCard key={props.id} {...props} />
        ))}
      </section>
      <Link to="/project" className="HomeBtn">
        Veja Mais
      </Link>

    </div>
  );
};


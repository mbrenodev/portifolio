import './Project.sass';

import Project from '../../data/projects'

import ProjectCard from './ProjectCard/ProjectCard';

export const Projects = () => {
  return (
    <div className='container'>
      <h1 className='title'>
        My Recent <strong>Works</strong>
      </h1>
      <p>
        Here are a few projects Ive worked on recently.
      </p>

      <ul>
        {Project.map((props) => (
          <ProjectCard key={props.id} {...props} />
        ))}

      </ul>

    </div>
  );
};


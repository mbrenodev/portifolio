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
          <a className='btn' href={links.site} target='_blank'>Texto do botão</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
import './ProjectCard.scss';

const ProjectCard = ({ image, title, description }) => {
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
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
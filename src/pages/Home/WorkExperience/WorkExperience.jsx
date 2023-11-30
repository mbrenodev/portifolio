import './WorkExperience.scss';

export const WorkExperience = () => {
  return (
    <div className='WorkExperienceContainer'>
      <h1 className='ProfessionalExperienceTitle'>Experiência Profissional</h1>

      <div className='WorkExperienceBody'>
        <div className='WorkExperienceCard'>
          <h3 className='WorkExperienceTitle'>Desenvolvedor Web</h3>
          <span className='WorkExperienceAge'>out 2023 ° No Momento ° (3 meses)</span>
          <p className='WorkExperienceText'>Desenvolvimento e manutenção de interfaces utilizando React, Next, Tailwind, Typescript e Figma. Para o planejamento dos sprints, é utilizado o Jira.</p>
          <div className='WorkExperienceCompe'>Competência</div>
          <span className='WorkExperienceTech'>WordPress</span>
        </div>

        <div className='WorkExperienceCard'>
          <h3 className='WorkExperienceTitle'>Desenvolvedor WordPress</h3>
          <span className='WorkExperienceAge'>out 2023 ° No Momento ° (3 meses)</span>
          <p className='WorkExperienceText'>Desenvolvimento e manutenção de interfaces utilizando React, Next, Tailwind, Typescript e Figma. Para o planejamento dos sprints, é utilizado o Jira.</p>
          <div className='WorkExperienceCompe'>Competência</div>
          <span className='WorkExperienceTech'>WordPress</span>
        </div>
      </div>

    </div>
  )
}

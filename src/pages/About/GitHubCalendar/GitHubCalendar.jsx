import GitHubCalendar from 'react-github-calendar';

import './GitHubCalendar.scss';

export const GithubCalendar = () => {

  return (
    <div className='aboutGithub'>
      <GitHubCalendar
        username="ChristieCardoso"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
};


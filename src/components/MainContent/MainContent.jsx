import Technologies from "../Technologies/Technologies";
import AboutContainer from "../AboutContainer";
import ProjectsContainer from "../ProjectsContainer";

import "./MainContent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <Technologies />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
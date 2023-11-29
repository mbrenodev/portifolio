import { Link } from "react-router-dom";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "./MainContent.scss";

const technologies = [
  { id: "html", name: "HTML5", age: "3 Anos", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", age: "3 Anos", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", age: "3 Anos", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", age: "1 Ano", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", age: "1 Ano", icon: <DiMysql /> },
  { id: "react", name: "React", age: "1 Ano", icon: <DiReact /> },
];


const MainContent = () => {
  return (
    <main className="MainContainer">
      <div className="technologies-container">
        <h2>Conhecimentos</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.age}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-container">
          <Link to="/about" className="btn">
            Veja Mais
          </Link>
        </div>
      </div>

    </main>
  );
};

export default MainContent;
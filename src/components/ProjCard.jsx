import { useState, useEffect } from "react";
import { projects as data } from "../data/projects";

function ProjCard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <>
      
      <div className="projects-container">
      <h1>PROYECTOS</h1>
        {projects.map((project) => (
          <div key={project.id} className="project-style">
            <img
              src={project.image}
              alt="Imagen de proyecto"
              className="img-project"
            />
            <h2>
              <a href={project.weblink} target="_blank">
                {project.title}
              </a>
            </h2>
            <p>{project.description}</p>
            <h5>Enlaces</h5>
            <p>
              <a href={project.gitlink} target="_blank">
                <img src="/src/icons/icons8-github-96.png" alt="logo-redes" className="logo-redes"/>
              </a>
            </p>
            <p>
              <a href={project.weblink} target="_blank">
                <img src="/src/icons/icons8-dominio-100.png" alt="logo-redes" className="logo-redes"/>
              </a>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjCard;

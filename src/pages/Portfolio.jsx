import { useState } from "react";
import Project from "../components/Project";
import projectsData from "../assets/projects.json"


export default function Portfolio() {
  const [projects, setProjects] = useState(projectsData);

  return (
    <div>
      <h1 className="d-flex justify-content-center">Portfolio</h1>
      <div className="card-deck row mx-5">
        {projects.map((project) =>
          
          <Project project={project}/>
          
        )}
      </div>
    </div>
  );
}
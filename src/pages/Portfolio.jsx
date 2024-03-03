import { useState } from "react";
import Project from "../components/Project";
import projectsData from "../assets/projects.json"


export default function Portfolio() {
  const [projects, setProjects] = useState(projectsData);

  return (
    <div>
      <h1>Portfolio</h1>
      {/* <ul>
        {projects.map((project) =>
        <li key={project.id}>
          <Project project={project}/>
        </li>
        )}
      </ul> */}

        {projects.map((project) =>
          
          <Project project={project}/>
          
        )}

    </div>
  );
}
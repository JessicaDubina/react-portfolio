import { useState } from "react";
import Project from "../components/Project";
import projectsData from "../assets/projects.json"


export default function Portfolio() {
  const [projects, setProjects] = useState(projectsData);
  const styles = {
    font: {
      fontSize: 'calc(1.75rem + 1.25vw)'
    },
    footeradjust: {
      marginBottom: '40px'
    }
  }

  return (
    <div>
      <h1 className="d-flex justify-content-center" style={styles.font}>Portfolio</h1>
      <div className="card-deck row mx-5" style={styles.footeradjust}>
        {projects.map((project) =>
          
          <Project project={project}/>
          
        )}
      </div>
    </div>
  );
}
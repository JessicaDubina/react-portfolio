import { Link } from "react-router-dom";

const styles = {
    links: {
      fontSize: '.9rem',
      color: 'white',
    },
  };

export default function ProjectFooter({project}) {
    return (
      <div className="card-footer border-top d-inline-flex justify-content-around">
        <div>
            <Link to={project.github} className="text-center text-muted text-decoration-none" style={styles.links}>Github</Link>
        </div>
        <div>
            <Link to={project.deployed} className="text-center text-muted text-decoration-none" style={styles.links}>Deployed App</Link>
        </div>
      </div>
    );
  }
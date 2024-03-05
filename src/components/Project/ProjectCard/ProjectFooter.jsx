import { Link } from "react-router-dom";

const styles = {
    links: {
      fontSize: 'calc(.8rem + .1vw)',
      color: 'white',
    },
  };

export default function ProjectFooter({project}) {
    return (
      <div className="card-footer border-top d-flex flex-row flex-wrap justify-content-around">
        <div>
            <Link to={project.github} className="text-center text-muted text-decoration-none" style={styles.links}>Github</Link>
        </div>
        <div>
            <Link to={project.deployed} className="text-center text-muted text-decoration-none" style={styles.links}>Deployed App</Link>
        </div>
      </div>
    );
  }
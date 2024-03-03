import { Link } from 'react-router-dom';
import Image from '../Images/Image';


export default function Project({project}) {
    return(
        <div>
            <h1>{project.title}</h1>
            <div>
            <Link to={project.deployed} className="project-link">Deployed App</Link>
            </div>
            <div>
            <Link to={project.github} className="project-link">Github</Link>
            </div>
        </div>
    );
}


import { Link } from 'react-router-dom';
import Image from '../Image';

function Project() {
    return(
        <div>
            <Image />
            <h1>Project title</h1>
            <div>
            <Link to="#" className="project-link">Deployed App</Link>
            </div>
            <div>
            <Link to="#" className="project-link">Github</Link>
            </div>
        </div>
    );
}

export default Project
import { Link } from 'react-router-dom';
import ProjectHeader from './ProjectCard/ProjectHeader';
import ProjectFooter from './ProjectCard/ProjectFooter';
import BackgroundImage from './ProjectCard/BackgroundImage';

export default function Project({project}) {
    let image = project.image;

    return(
            <div className='card col-md-5 my-3 mx-auto border p-0 shadow' style={{
                height: "auto",
                minHeight: "20rem"
            }}>
            {/* <BackgroundImage image={project.image}/> */}
                <div className="card-body" style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "40rem"
                }}>
            
                <ProjectHeader project={project}/>
            </div>
            <ProjectFooter project={project}/>
            </div>
    );
}


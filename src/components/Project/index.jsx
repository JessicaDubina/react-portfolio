import { Link } from 'react-router-dom';
import ProjectHeader from './ProjectCard/ProjectHeader';
import ProjectFooter from './ProjectCard/ProjectFooter';
import ProjectBody from './ProjectCard/ProjectBody';

export default function Project({project}) {

    return(
            <div className='card col-md-5 my-3 mx-auto border p-2 shadow' style={{
                height: "auto",
                minHeight: "20rem"
            }}>
                    <ProjectHeader project={project}/> 
                    <ProjectBody image={project.image} bgColor={project.bodyBackground}/>
                    <ProjectFooter project={project}/>
            </div>
    );
}


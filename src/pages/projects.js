
import { useEffect } from "react";
import ProjectPanel from "./comps/project-panel";
import projectdata from '@/json-files/project_details.json'



const Projects = () => {

    

    return (
        <div className="project-page-main-body"
        >

            {
                Object.keys(projectdata).map((key,dex) => {

                    return(
                        <ProjectPanel key={key}
                        data={{
                            name:key,
                            _data:projectdata[key]
                        }}
                        />
                    )
                })
            }

        </div>
    );
}
 
export default Projects;
import React from "react";

import ProjectsPage from '../ProjectsPage';
import Format from "../../../layout/Format/Format";
import './MechHub.css';

export default function MechHub() {
    return (
        <Format content={
            <>
                <ProjectsPage 
                    title="MechHub"
                    techStack={['ReactJS', 'CSS', 'Firebase', 'TensorFlow']}
                    liveLink="https://orbital-mechhub.web.app/"
                    sourceLink="https://github.com/vanesssalai/orbital-mechhub"
                    content=''
                />
                <div className="mechHub-content">
                    <p>MechHub is a Full-Stack E-Commerce Site for Mechanical Keyboards
                        I mainly worked on the      
                    </p>
                </div>
            </>
        } />
    )
}
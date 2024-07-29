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
                    <p>for </p>
                </div>
            </>
        } />
    )
}
import React from "react";

import MechHub_preview from '../../../assets/Images/MechHub/MechHub_preview.png';
import ProjectsPage from '../ProjectsPage';
import Format from "../../../layout/Format/Format";
import './MechHub.css';

export default function MechHub() {
    return (
        <Format content={
            <>
                <ProjectsPage 
                    title="MechHub"
                    techStack={['ReactJS', 'Firebase', 'TensorFlow']}
                    liveLink="https://orbital-mechhub.web.app/"
                    sourceLink="https://github.com/vanesssalai/orbital-mechhub"
                />
                <div className="mechHub-content">
                    <p>MechHub is a Full-Stack E-Commerce Site for Mechanical Keyboards built for NUS Orbital 2024.</p>
                    <img 
                        src={MechHub_preview}
                        alt="MechHub"
                        className="mh-img"
                    />
                    <p>
                        The web application includes features such as user chats, listings and a forum. 
                        <br />I mainly worked on the CRUD system for listing, likes and following, the forum system, recommendation system, product search and filter and the seller dashboard.  
                        For more details on the features and their implementaion, you may view the README in the <a href="https://github.com/vanesssalai/orbital-mechhub">source code</a>.
                    </p>
                </div>
            </>
        } />
    )
}
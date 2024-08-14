import React, { useEffect } from "react";

import MechHub_preview from '../../../assets/Images/MechHub/MechHub_preview.png';
import ProjectsPage from '../ProjectsPage';
import Format from "../../../layout/Format/Format";
import './MechHub.css';

export default function MechHub() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
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
                    <p >MechHub is a Full-Stack E-Commerce Site for Mechanical Keyboards built for NUS Orbital 2024.</p>
                    <img 
                        src={MechHub_preview}
                        alt="MechHub"
                        className="mh-img"
                    />
                    <p className="mh-desc">
                        The web application includes features such as user chats, listings and a forum. 
                    </p>
                    <p className="mh-desc">
                    I mainly worked on the CRUD system for listing, likes and following, the forum system, the recommendation system, product search and filter and the seller dashboard. 
We also utilised Jest and React Testing Library to conduct unit testing.
 For more details on the features and their implementation, you may view the README in the <a href="https://github.com/vanesssalai/orbital-mechhub">source code</a>.
                    </p>
                </div>
            </>
        } />
    )
}
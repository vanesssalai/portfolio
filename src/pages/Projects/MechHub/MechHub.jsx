import React from "react";
import Format from '../../../layout/Format/Format';
import '../ProjectsPage.css';
import './MechHub.css';

export default function MechHub() {
    const stack = [
        {
            name: ['ReactJS', 'CSS', 'Firebase', 'TensorFlow'], 
        },
    ];

    return (
        <Format content={
            <div className="project-content-container">
                <div className="project-summary">
                    <h1>MechHub</h1>
                    <div className="tech-stack">
                        {stack[0].name.map((tech, index) => ( 
                            <p
                                key={index}
                            >
                                {tech}
                            </p>
                        ))}
                    </div>
                    <div className="redirect-links">
                        <a href="#">View Live</a>
                        <a href="#">View Source</a>
                    </div>

                </div>
            </div>
        } />
    )
}
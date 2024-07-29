import React from "react";
import { useNavigate } from "react-router-dom";
import Format from '../../../layout/Format/Format';
import '../ProjectsPage.css';
import './MechHub.css';

export default function MechHub() {
    const navigate = useNavigate();

    const stack = [
        {
            name: ['ReactJS', 'CSS', 'Firebase', 'TensorFlow'], 
        },
    ];

    const handleBackClick = () => {
        navigate('/', { state: { scrollToProjects: true } });
    };

    return (
        <Format content={
            <div>
                <div>
                    <button onClick={handleBackClick}>back</button>
                </div>
                <div className="project-content-container">
                    <div className="project-summary">
                        <h1>MechHub</h1>
                        <div className="tech-stack">
                            {stack[0].name.map((tech, index) => ( 
                                <p key={index}>{tech}</p>
                            ))}
                        </div>
                        <div className="redirect-links">
                            <a href="https://orbital-mechhub.web.app/" target="_blank" rel="noopener noreferrer">View Live</a>
                            <a href="https://github.com/vanesssalai/orbital-mechhub" target="_blank" rel="noopener noreferrer">View Source</a>
                        </div>
                    </div>
                    <div className="project-content">
                        {/* Add your project content here */}
                    </div>
                </div>
            </div>
        } />
    )
}
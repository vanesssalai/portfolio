import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaCode, FaLaptop } from "react-icons/fa";

import './ProjectsPage.css';

export default function ProjectsPage({ title, techStack, liveLink, sourceLink }) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/', { state: { scrollToProjects: true } });
    };

    return (
        <div className="project-content">
            <button 
                className='back-button' 
                onClick={handleBackClick}
            >
                <FaAngleLeft /> back
            </button>
            <div className="project-content-container">
                <div className="project-summary">
                    <div className="project-header">
                        <h1>{title}</h1>
                        <div className="redirect-links">
                            {liveLink && (
                                <a href={liveLink} target="_blank" rel="noopener noreferrer">View Live <FaLaptop /></a>
                            )}
                            {sourceLink && (
                                <a href={sourceLink} target="_blank" rel="noopener noreferrer">View Source <FaCode /></a>
                            )}
                        </div>
                    </div>
                    <div className="tech-stack">
                        <h4>Tech Stack</h4>
                        <div className="tech-stack-stack">
                            {techStack.map((tech, index) => ( 
                                <p key={index}>{tech}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
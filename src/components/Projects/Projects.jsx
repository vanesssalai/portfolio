import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

import MechHub_Landing from '../../assets/Images/MechHub/MechHub.png';
import MechHub_Profile from '../../assets/Images/MechHub/MechHub2.png';
import MechHub_Forum from '../../assets/Images/MechHub/MechHub3.png';
import './Projects.css';

export default function Projects() {
    const navigate = useNavigate();

    const projects = [
        {
            name: 'MechHub',
            description: 'MechHub is an e-commerce site for mechanical keyboards',
            live: 'https://orbital-mechhub.web.app/',
            images: [MechHub_Landing, MechHub_Profile, MechHub_Forum],
            path: '/mechhub'
        },
    ];

    const projectRefs = useRef([]);

    // Appear on scroll effect
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                } else {
                    entry.target.classList.remove('appear');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        projectRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const handleClick = (path, event) => {
        event.stopPropagation();
        navigate(path);
    };

    return (
        <div>
            <div className="projects" id="projects">
                <h1>My Projects</h1>
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        ref={el => projectRefs.current[index] = el}
                        className="project-item"
                    >
                        <div className="image-container">
                            {project.images.map((image, imgIndex) => (
                                <img key={imgIndex} src={image} alt={`${project.name}-${imgIndex}`} className="project-image" />
                            ))}
                        </div>
                        <div className="project-information-container">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">View Live</a>
                        </div>
                        <div className="hidden" onClick={(event) => handleClick(project.path, event)}>
                            <p>click here for more info <FaAngleRight /> </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
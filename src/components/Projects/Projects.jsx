import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import MechHub from '../../assets/MechHub.png';
import './Projects.css';

export default function Projects() {
    const navigate = useNavigate();

    const projects = [
        {
            name: 'MechHub',
            description: 'MechHub is an e-commerce site for mechanical keyboards',
            live: 'https://orbital-mechhub.web.app/',
            image: MechHub,
        },
        {
            name: 'MechHub',
            description: '',
            live: 'https://orbital-mechhub.web.app/',
            image: MechHub,
        },

    ];

    const projectRefs = useRef([]);

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
                        <img src={project.image} alt={project.name} />
                        <div className="project-information-container">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">View Live</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
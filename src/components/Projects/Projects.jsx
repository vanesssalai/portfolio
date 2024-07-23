import React, { useEffect, useRef } from "react";
import './Projects.css';

export default function Projects() {
    const projects = [
        {
            name: 'MechHub',
            description: '',
            live: 'https://orbital-mechhub.web.app/',
            image: '',
        }
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
            <div className="projects">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        ref={el => projectRefs.current[index] = el}
                        className="project-item"
                    >
                        <img src={project.thumbnail} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
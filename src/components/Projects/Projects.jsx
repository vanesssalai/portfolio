import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

import MechHub from '../../assets/Images/MechHub/MechHub_preview.png';
import './Projects.css';

export default function Projects() {
    const navigate = useNavigate();

    const projects = [
        {
            name: 'MechHub',
            description: 'Full-Stack E-Commerce Site for Mechanical Keyboards',
            images: [MechHub],
            path: '/mechhub'
        },
        {
            name: 'Get It Done',
            description: 'Simple to-do list', 
            images: [],
            path: '/'
        }
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
        // Save current scroll position before navigating
        sessionStorage.setItem("projectsScrollPosition", window.pageYOffset.toString());
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
                        <div className="project-information-container">
                            <h3 className="project-name">{project.name}</h3>
                            <div className="project-information-desc">
                                <p className="project-desc">{project.description}</p>
                                <a className="view-more-button" onClick={(event) => handleClick(project.path, event)}>View Project <FaArrowRight /></a>
                            </div>
                        </div>
                        <div className="image-container">
                            {project.images.map((image, imgIndex) => (
                                <img 
                                    key={imgIndex} 
                                    src={image} 
                                    className="project-image"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
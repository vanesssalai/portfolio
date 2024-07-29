import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../../components/Hero/Hero';
import About from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import Format from '../../layout/Format/Format';

export default function Home() {
    const location = useLocation();
    const projectsRef = useRef(null);

    useEffect(() => {
        if (location.state && location.state.scrollToProjects) {
            const scrollPosition = sessionStorage.getItem("projectsScrollPosition");
            if (scrollPosition && projectsRef.current) {
                setTimeout(() => {
                    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
                    window.scrollTo(0, parseInt(scrollPosition));
                }, 100);
            }
            sessionStorage.removeItem("projectsScrollPosition");
        }
    }, [location]);

    return (
        <Format content={
            <>
                <Hero />
                <About />
                <div ref={projectsRef}>
                    <Projects />
                </div>
            </>
        } />
    )
}
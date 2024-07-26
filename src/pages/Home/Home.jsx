import React from 'react';

import Hero from '../../components/Hero/Hero';
import About from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import Format from '../../layout/Format/Format';

export default function Home() {
    return (
        <Format content={
            <>
                <Hero />
                <About />
                <Projects />
            </>
        } />
    )
}
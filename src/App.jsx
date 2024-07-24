import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer';
import './App.css'

function App() {

    return (
    <div>
        <Header />
        <main>
            <Hero />
            <About />
            <Projects />
        </main>
        <Footer />
    </div>
    )
}

export default App

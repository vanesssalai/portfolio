import React from 'react';
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
            <About />
            <Projects />
        </main>
        <Footer />
    </div>
    )
}

export default App

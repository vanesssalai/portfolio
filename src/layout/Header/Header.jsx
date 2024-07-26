import React, { useState, useEffect } from "react";
import './Header.css';

export default function Header() {
    const [showAnimation, setShowAnimation] = useState(false);
    const [animationFrame, setAnimationFrame] = useState(0);

    const toggleAnimation = () => {
        setShowAnimation(true);
        setAnimationFrame(0);
        const animationElement = document.querySelector('.animation-text');
        if (animationElement) {
            animationElement.style.animation = 'none';
            animationElement.offsetHeight; 
            animationElement.style.animation = null;
        }
    };

    const animationFrames = [
        "♪♬┏(⌐■_■)┛",
        "♬♪┗(⌐■_■)┓"
    ];

    useEffect(() => {
        let animationInterval;
        if (showAnimation) {
            animationInterval = setInterval(() => {
                setAnimationFrame((prevFrame) => (prevFrame + 1) % animationFrames.length);
            }, 500); 

            setTimeout(() => {
                clearInterval(animationInterval);
                setShowAnimation(false);
            }, 8000); 
        }
        return () => clearInterval(animationInterval);
    }, [showAnimation]);

    return (
        <>
            <header>
                <div className="name">
                    <a onClick={toggleAnimation}>Vanessa Lai</a>
                </div>
                <div className="header-links">
                    <a className="header-about" >About Me</a>
                    <a className="header-projects" href="#projects">Projects</a>
                    <a className="header-resume">Resume</a>
                </div>
            </header>
            {showAnimation && (
                <div className="animation-container">
                    <div className="animation-text">
                        {animationFrames[animationFrame]}
                    </div>
                </div>
            )}
        </>
    );
}
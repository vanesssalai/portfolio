import React, { useState, useEffect } from "react";
import './Header.css';

const ANIMATION_FRAMES = [
    "♪♬┏(⌐■_■)┛",
    "♬♪┗(⌐■_■)┓"
];
const ANIMATION_INTERVAL = 500;
const ANIMATION_DURATION = 8000;

const resetAnimation = (element) => {
    if (element) {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = null;
    }
};

function HeaderContent({ toggleAnimation }) {
    return (
        <header>
            <div className="name">
                <a onClick={toggleAnimation}>Vanessa Lai</a>
            </div>
            <nav className="header-links">
                <a className="header-about" href="/#about">About Me</a>
                <a className="header-projects" href="/#projects">Projects</a>
                <a 
                    className="header-resume"
                    href="/static/VanessaLai_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                        Resume
                </a>
            </nav>
        </header>
    );
}

function AnimationComponent({ frame }) {
    return (
        <div className="animation-container">
            <div className="animation-text">
                {ANIMATION_FRAMES[frame]}
            </div>
        </div>
    );
}

export default function Header() {
    const [showAnimation, setShowAnimation] = useState(false);
    const [animationFrame, setAnimationFrame] = useState(0);

    const toggleAnimation = () => {
        setShowAnimation(true);
        setAnimationFrame(0);
        resetAnimation(document.querySelector('.animation-text'));
    };

    useEffect(() => {
        let animationInterval;
        if (showAnimation) {
            animationInterval = setInterval(() => {
                setAnimationFrame((prevFrame) => (prevFrame + 1) % ANIMATION_FRAMES.length);
            }, ANIMATION_INTERVAL);

            const timer = setTimeout(() => {
                clearInterval(animationInterval);
                setShowAnimation(false);
            }, ANIMATION_DURATION);

            return () => {
                clearInterval(animationInterval);
                clearTimeout(timer);
            };
        }
    }, [showAnimation]);

    return (
        <>
            <HeaderContent toggleAnimation={toggleAnimation} />
            {showAnimation && <AnimationComponent frame={animationFrame} />}
        </>
    );
}
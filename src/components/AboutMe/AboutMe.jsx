import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Self_Portrait from '../../assets/Images/About/tempProfile.jpg';
import Vanesssa from '../../assets/Images/About/VanessaLai.jpg';

import './AboutMe.css';

export default function About() {
    return (
        <div id="about" className="about">
            <h1>About Me</h1>
            <div className="about-container">
                <div className="about-image">
                    <img src={Vanesssa} alt="Vanessa"/>
                </div>
                <div className="about-text">
                    <p>
                        I'm Vanessa, a Year 2 Business Analytics student at the National University of Singapore.
                        
                    </p>
                    <p>
                        In my free time I also enjoy anime, building keyboards and grandma-ish activities such as crocheting and legos.
                    </p>
                </div>
            </div>
            <div className="link-button">
                <a href='#projects' className="link">
                    View My Projects Below <FaArrowDown />
                </a>
            </div>
        </div>
    )
}

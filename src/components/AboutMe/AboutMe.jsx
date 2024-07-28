import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Self_Portrait from '../../assets/Images/About/tempProfile.jpg'
import './AboutMe.css'

export default function About() {
    return (
        <div id="about" className="about">
            <h1>About Me</h1>
            <div className="about-container">
                <div className="about-image">
                    <img src={Self_Portrait} alt="Self Portrait" />
                    <p>Self Potrait of the creator</p>
                    <a>*we do not guarantee that this is an accurate depiction </a>
                </div>
                <div className="about-text">

                    <p>The creator of this page is currently too shy to do this part, we seek your understanding</p>
                </div>
                
            </div>
            <div className="link-button">
                    <a href='#projects' className="link">
                        Learn More About My Projects <FaArrowDown />
                    </a>
                </div>
        </div>
    )
}

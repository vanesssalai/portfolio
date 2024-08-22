import React from "react";
import Vanesssa from '../../../assets/Images/About/VanessaLai.jpg';
import './Screen.css';

export default function Screen() {
    const skills = [
        'Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'R'
    ]

    return (
        <div className="screen">
            <div id="heroHeader">
                <h1>Select A Hero</h1>
                <h3>About</h3>
            </div>
            <div id="heroContent">
                <div id="heroDesc">
                    <h4>Vanessa</h4>
                    <p className="heroDescSub">Year 2 Business Analytics Student NUS</p>
                    <div className="herodescContainer">
                        <div className="descContent">
                            <h5>HP</h5>
                            <div className="statusBar">
                                <div className="health">
                                    93%
                                </div>
                            </div>
                        </div>
                        <div className="descContent">
                            <h5>MP</h5>
                            <div className="statusBar">
                                <div className="mana">
                                    62%
                                </div>
                            </div>
                        </div>
                        <div className="descContent">
                            <h5>Skills</h5>
                            <div className="skills">
                                {skills.map((skill, index) => ( 
                                    <p key={index}>{skill}</p>
                                ))}
                            </div>
                        </div>
                        <div className="descContent descDescription">
                            <h5>Description</h5>
                            <p>Vanessa is a Year 2 Business Analytics Student at the National University of Singapore who loves cats and grandma-esque activities.</p>
                            <p>In her Free Time, you may also be lucky enough to catch her working on this site.</p>
                        </div>
                    </div>
                </div>
                <div className="heroImageBox">
                    <img src={Vanesssa} alt="" />
                </div>
            </div>
        </div>
    )
}
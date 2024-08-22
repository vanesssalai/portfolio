import React from "react";
import Vanesssa from '../../../assets/Images/About/VanessaLai.jpg';
import './Screen.css';

export default function Screen({ hero }) {
    const heroes = [
        {
            heroClass: 'About',
            heroName: 'Vanessa',
            heroDescSub: 'Year 2 Business Analytics Student NUS',
            health: '93%',
            mana: '62%',
            skills: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'R'],
            description: [
                'Vanessa is a Year 2 Business Analytics Student at the National University of Singapore who loves cats and grandma-esque activities.',
                'In her Free Time, you may also be lucky enough to catch her working on this site.'
            ],
            image: Vanesssa
        }
    ];

    const selectedHero = heroes.find(h => h.heroName === hero);

    if (!selectedHero) {
        return (
            <div className="screen">
                <div id="heroHeader">
                    <h1>Select A Hero</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="screen">
            <div id="heroHeader">
                <h1>Select A Hero</h1>
                <h3 id="heroClass">{selectedHero.heroClass}</h3>
            </div>
            <div id="heroContent">
                <div id="heroDesc">
                    <h4 id="heroName">{selectedHero.heroName}</h4>
                    <p className="heroDescSub">{selectedHero.heroDescSub}</p>
                    <div className="herodescContainer">
                        <div className="descContent">
                            <h5>HP</h5>
                            <div className="statusBar">
                                <div className="health">
                                    {selectedHero.health}
                                </div>
                            </div>
                        </div>
                        <div className="descContent">
                            <h5>MP</h5>
                            <div className="statusBar">
                                <div className="mana">
                                    {selectedHero.mana}
                                </div>
                            </div>
                        </div>
                        <div className="descContent">
                            <h5>Skills</h5>
                            <div className="skills">
                                {selectedHero.skills.map((skill, index) => (
                                    <p key={index}>{skill}</p>
                                ))}
                            </div>
                        </div>
                        <div className="descContent descDescription">
                            <h5>Description</h5>
                            {selectedHero.description.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="heroImageBox">
                    <img src={selectedHero.image} alt={selectedHero.heroName} />
                </div>
            </div>
        </div>
    );
}
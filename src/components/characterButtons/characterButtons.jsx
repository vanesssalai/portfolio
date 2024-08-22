import React from "react";
import aboutLogo from '../../assets/Images/Character/aboutLogo.png';
import mechhubLogo from '../../assets/Images/Character/mechhubLogo.png';
import './characterButtons.css';

export default function CharacterButtons() {
    const heroes = [
        {
            type: 'about',
            content: [
                {
                    name: 'vanessa',
                    logo: [aboutLogo]
                }, {
                    name: 'resume',
                    logo: ''
                }
            ]
        },
        {
            type: 'projects',
            content: [
                {
                    name: 'MechHub',
                    logo: [mechhubLogo],
                },
                {
                    name: 'GetitDone',
                    logo: '',
                },
                {
                    name: 'Ultimate TicTacToe',
                    logo: '',
                }
            ]
        },
        {
            type: 'socials',
            content: [
                {
                    name: 'GitHub',
                    logo: ''
                },
                {
                    name: 'LinkedIn',
                    logo: ''
                }, 
                {
                    name: 'Email',
                    logo: ''
                }
            ]
        }
    ];

    return (
        <div className="chrButtons">
            {heroes.map(hero => (
                <div key={hero.type} className="heroSection">
                    <h3>{hero.type}</h3>
                    <div className="heroChrButtonContainer">
                        {hero.content.map(item => (
                            <div key={item.name} className="chrButtonContainer">
                                <button className="chrButton">
                                    <img src={item.logo} alt={item.name} />
                                </button>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
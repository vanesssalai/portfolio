import React from "react";
import aboutLogo from '../../assets/Images/Character/aboutLogo.png';
import mechhubLogo from '../../assets/Images/Character/mechhubLogo.png';
import getitdoneLogo from '../../assets/Images/Character/getitdoneLogo.png';
import githubLogo  from '../../assets/Images/Character/githubLogo.png';
import linkedinLogo from '../../assets/Images/Character/linkedinLogo.png';
import gmailLogo from '../../assets/Images/Character/gmailLogo.png';
import ultiTTTLogo from '../../assets/Images/Character/ultiTTTLogo.png';
import './characterButtons.css';

export default function CharacterButtons({ onHeroSelect }) {
    const heroes = [
        {
            type: 'about',
            content: [
                {
                    name: 'Vanessa',
                    logo: [aboutLogo]
                }, {
                    name: 'resume',
                    logo: [githubLogo],
                    link: '../../../../static/VanessaLai_Resume.pdf' 
                }
            ]
        },
        {
            type: 'projects',
            content: [
                {
                    name: 'MechHub',
                    logo: mechhubLogo,
                },
                {
                    name: 'GetitDone',
                    logo: getitdoneLogo,
                },
                {
                    name: 'Ultimate TicTacToe',
                    logo: ultiTTTLogo,
                }
            ]
        },
        {
            type: 'socials',
            content: [
                {
                    name: 'GitHub',
                    logo: githubLogo,
                    link: 'https://github.com/vanesssalai'
                },
                {
                    name: 'LinkedIn',
                    logo: linkedinLogo,
                    link: 'https://www.linkedin.com/in/vanessa-lai-2496b52b2/'
                },
                {
                    name: 'Email',
                    logo: gmailLogo,
                    link: 'mailto:vanessalaiyz.work@u.nus.edu'
                }
            ]
        }
    ];

    const handleButtonClick = (item) => {
        if (item.link) {
            window.open(item.link, '_blank');
        } else {
            onHeroSelect(item.name);
        }
    };

    return (
        <div className="chrButtons">
            {heroes.map(hero => (
                <div key={hero.type} className="heroSection">
                    <h3>{hero.type}</h3>
                    <div className="heroChrButtonContainer">
                        {hero.content.map(item => (
                            <div key={item.name} className="chrButtonContainer">
                                <button
                                    className="chrButton"
                                    onClick={() => handleButtonClick(item)}
                                >
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
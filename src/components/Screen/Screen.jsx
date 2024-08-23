import React from "react";
import Vanesssa from '../../assets/Images/About/VanessaLai.jpg';
import Mechhub from '../../assets/Images/MechHub/MechHub_preview.png';
import getItDone from '../../assets/Images/GetItDone/GetItDone.png';
import ultimateTTT from '../../assets/Images/UltimateTTT/UltimateTTT.png';
import { FaLock, FaAngleRight } from "react-icons/fa";
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
                'Vanessa is a Year 2 Business Analytics Student at the National University of Singapore who loves cats, mechanical keyboards and grandma-esque activities.',
                'Despite this being a game themed site Vanessa has not touched any pc or console games in about 2 years with the exception of Minecraft.'
            ],
            image: Vanesssa,
            play: ''
        }, {
            heroClass: 'Projects',
            heroName: 'MechHub',
            heroDescSub: 'Full-Stack E-Commerce Site for Mechanical Keyboards',
            health: '100%',
            mana: '84%',
            skills: ['ReactJS', 'Firebase', 'TensorFlow'],
            description: [
                'MechHub is a Full-Stack E-Commerce Site for Mechanical Keyboards built for NUS Orbital 2024.',
                'The web application includes features such as user chats, listings and a forum.',
                'I mainly worked on the CRUD system for listing, likes and following, the forum system, the recommendation system, product search and filter and the seller dashboard. We also utilised Jest and React Testing Library to conduct unit testing. For more details on the features and their implementation, you may view the README in the <a href="https://github.com/vanesssalai/orbital-mechhub">source code</a>.'
            ],
            image: Mechhub,
            stats: 'https://github.com/vanesssalai/orbital-mechhub',
            play: 'https://orbital-mechhub.web.app/'
        }, {
            heroClass: 'Projects',
            heroName: 'GetitDone',
            heroDescSub: 'Project Manager using MERN stack',
            health: '50%',
            mana: '80%',
            skills: ['MongoDB', 'Express', 'ReactJS', 'NodeJS', 'TailwindCSS'],
            description: [
                'GetItDone is a simple full-stack MERN to-do list/ glorified project management web application with a telegram bot.',
            ],
            image: getItDone,
            stats: 'https://github.com/vanesssalai/GetItDone',
            play: 'https://github.com/vanesssalai/GetItDone'
        }, {
            heroClass: 'Projects',
            heroName: 'Ultimate TicTacToe',
            heroDescSub: 'Online multiplayer ultimate tictactoe game',
            health: '83%',
            mana: '96%',
            skills: ['Nodejs', 'TailwindCSS','Socketio'],
            description: [
                'his project is an online multiplayer version of Ultimate Tic-Tac-Toe, which reminds me of playing it in class in secondary school.',
                'The implementation uses React for the frontend and NodeJS with Socket.io for the backend. React hooks are used for state management, while Socket.io, with its real-time communication capabilities, is integrated for instant updates. The implementation also includes the logic for handling the ultimate tic tac toe rules, such as determining which board is playable based on the previous move.',
                'A future development would be to add a bot to allow for single player modes.'
            ],
            image: ultimateTTT,
            stats: 'https://github.com/vanesssalai/ultimate-ttt',
            play: 'https://ultimate-ttt-wk1e.onrender.com'
        }
    ];

    const selectedHero = heroes.find(h => h.heroName === hero);

    const handleStatsButtonClick = () => {
        if (selectedHero && selectedHero.stats) {
            window.open(selectedHero.stats, '_blank');
        }
    };   

    const handlePlayButtonClick = () => {
        if (selectedHero && selectedHero.play) {
            window.open(selectedHero.play, '_blank');
        }
    };    

    if (!selectedHero) {
        return (
            <div className="screen">
                <div className="heroHeader">
                    <h1>Select A Hero</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="screen">
            <div className="heroHeader">
                <h1>Select A Hero</h1>
                <h3 id="heroClass">{selectedHero.heroClass}</h3>
            </div>
            <div id="heroContent">
                <div id="heroDesc">
                    <div className="heroDescHeader">
                        <div className="heroDescName">
                            <h4 id="heroName">{selectedHero.heroName}</h4>
                            <p className="heroDescSub">{selectedHero.heroDescSub}</p>
                        </div>
                        {selectedHero.stats ? (
                            <div 
                                className="viewStats" 
                                onClick={handleStatsButtonClick}
                            >
                                View Full Stats <FaAngleRight />
                            </div>
                        ) : (
                            <div className="unViewStats">
                                Unlock this Hero to View Full Stats
                            </div>
                        )}
                    </div>
                    
                    <div className="heroDescContainer">
                        <div className="descContent">
                            <h5>HP</h5>
                            <div className="statusBar">
                                <div className="health" style={{width: selectedHero.health}}>
                                    {selectedHero.health}
                                </div>
                            </div>
                        </div>
                        <div className="descContent">
                            <h5>MP</h5>
                            <div className="statusBar">
                                <div className="mana" style={{width: selectedHero.mana}}>
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
                                <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="heroImageBox">
                    <img src={selectedHero.image} alt={selectedHero.heroName} />
                </div>
            </div>
            {
                selectedHero.play ? (
                    <div className="playButton">
                        <button
                            className="playable"
                            onClick={handlePlayButtonClick}
                        >
                            Start Game
                        </button>
                    </div>
                ) : (
                    <div className="playButton">
                        <button
                            className="unplayable"
                        >
                            Unlock this Hero to Play
                        </button>
                    </div>
                )
            }
        </div>
    );
}
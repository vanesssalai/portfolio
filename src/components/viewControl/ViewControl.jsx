import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import Screen from '../characterInfo/CharacterInfo';
import CharacterButtons from '../characterButtons/CharacterButtons';
import LandingBackground from '../landingBackground/LandingBackground';
import './ViewControl.css';

export default function ViewControl() {
    const [showConfirm, setShowConfirm] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [playerNumbers, setPlayerNumbers] = useState(0);
    const [selectedHero, setSelectedHero] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfirm(true);
        }, 3000);

        setPlayerNumbers(0);

        return () => clearTimeout(timer);
    }, []);

    const handleEnterGame = () => {
        setPlayerNumbers(prevNumber => prevNumber + 1);
        
        const waitForPlayers = setTimeout(() => {
            setGameStarted(true);
            console.log(gameStarted);
        }, 300); 

        return () => clearTimeout(waitForPlayers);
    };

    const handleHeroSelect = (heroName) => {
        setSelectedHero(heroName);
    };

    if (gameStarted) {
        console.log('game has started');
        return (
            <div className="chrInfo">
                <div className='heroScreen'>
                    <Screen hero={selectedHero} />
                </div>
                <CharacterButtons onHeroSelect={handleHeroSelect} />
            </div>
        );
    }

    return (
        <div className="landingScreen">
            <LandingBackground isBlurred={showConfirm} />
            <div className="landingHeader">
                {!showConfirm ? (
                    <div className="headerIcon searchHeader">
                        <div className="searchAnimation"></div>
                        <h3 className="headerText searchGame">Searching For Game</h3>
                    </div>
                ) : (
                    <div className="headerIcon foundHeader">
                        <div className="foundCheck">
                            <FaCheck />
                        </div>
                        <h3 className="headerText foundGame">Game Found!</h3>
                    </div>
                )}
            </div>
            <div className={`accept ${showConfirm ? 'visible' : ''}`}>
                <h4 className="waitingText">
                    Waiting for Players<span className="dots"></span>
                    <br /> {playerNumbers}/ 1
                </h4>
                <button className="acceptButton" onClick={handleEnterGame}>
                    Enter
                </button>
            </div>
        </div>
    );
}
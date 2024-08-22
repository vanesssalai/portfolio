import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import Screen from '../MiniScreen/Screen/Screen';
import CharacterButtons from '../characterButtons/characterButtons';
import './landingScreen.css';

export default function LandingScreen() {
    const [showConfirm, setShowConfirm] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [playerNumbers, setPlayerNumbers] = useState(0);
    const [selectedHero, setSelectedHero] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfirm(true);
        }, 2000);

        setPlayerNumbers(0);

        return () => clearTimeout(timer);
    }, []);

    const handleEnterGame = () => {
        setPlayerNumbers(prevNumber => prevNumber + 1);
        
        setTimeout(() => {
            setGameStarted(true);
        }, 300);
    };

    const handleHeroSelect = (heroName) => {
        setSelectedHero(heroName);
    };

    if (gameStarted) {
        return (
            <div className="newPage">
                <div className='miniScreen'>
                    <Screen hero={selectedHero} />
                </div>
                <CharacterButtons onHeroSelect={handleHeroSelect} />
            </div>
        );
    }

    return (
        <div className="landingScreen">
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
            {showConfirm && (
                <div className="accept">
                    <h4 className="waitingText">
                        Waiting for Players<span className="dots"></span>
                        <br /> {playerNumbers}/ 1
                    </h4>
                    <button className="acceptButton" onClick={handleEnterGame}>
                        Enter
                    </button>
                </div>
            )}
        </div>
    );
}
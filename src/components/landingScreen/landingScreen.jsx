import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import Screen from '../MiniScreen/Screen/Screen';
import CharacterButtons from '../characterButtons/characterButtons';
import './landingScreen.css';

export default function LandingScreen() {
    const [showConfirm, setShowConfirm] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfirm(true);
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    const handleEnterGame = () => {
        console.log('entering game');
        setGameStarted(true);
    }

    if (gameStarted) {
        return (
            <div className="newPage">
                <div className='miniScreen'>
                    <Screen/>
                </div>
                <CharacterButtons />
            </div>
        );
    }

    return (
        <div className="landingScreen">
            <div className="landingHeader">
                {!showConfirm ?(
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
                <button className="confirmButton" onClick={handleEnterGame}>
                    Enter Game
                </button>
            )}
        </div>
    );
}
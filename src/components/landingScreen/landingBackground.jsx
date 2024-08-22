import React from "react";
import { FaLock } from "react-icons/fa";
import './landingBackground.css';

export default function LandingBackground({ isBlurred }) {
    return (
        <div className={`landingBg ${isBlurred ? 'blurred' : ''}`}>
            <div className="gameCardsContainer">
                <div className="gameCard">
                    <div className="gameCardImage qp">

                    </div>
                    <div className="gameCardText">
                        <h1>Quick Play</h1>
                        <p><FaLock /> You Cannot Select When In Queue</p>
                    </div>
                </div>
                <div className="gameCard">
                    <div className="gameCardImage comp">
                        
                    </div>
                    <div className="gameCardText">
                        <h1>Competitive</h1>
                        <p><FaLock /> You Cannot Select When In Queue</p>
                    </div>
                </div>
                <div className="gameCard">
                    <div className="gameCardImage pr">
                        
                    </div>
                    <div className="gameCardText">
                        <h1>Practice Range</h1>
                        <p><FaLock /> You Cannot Select When In Queue</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
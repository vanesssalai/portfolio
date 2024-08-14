import React, { useEffect } from "react";

import ProjectsPage from '../ProjectsPage';
import Format from "../../../layout/Format/Format";
import UltimateTTT_preview from '../../../assets/Images/UltimateTTT/UltimateTTT.png';
import './UltimateTTT.css';

export default function UltimateTTT() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <Format content={
            <>
                <ProjectsPage 
                    title="Ultimate TicTacToe"
                    techStack={['Nodejs', 'TailwindCSS','Socketio']}
                    liveLink="https://ultimate-ttt-wk1e.onrender.com"
                    sourceLink="https://github.com/vanesssalai/ultimate-ttt"
                />
                <div className="mechHub-content">
                    <p>This project is an online multiplayer version of Ultimate Tic-Tac-Toe, which reminds me of playing it in class in secondary school.</p>
                    <img 
                        src={UltimateTTT_preview}
                        alt="MechHub"
                        className="mh-img"
                    />
                    <p>
                    The implementation uses React for the frontend and NodeJS with Socket.io for the backend.
                    React hooks are used for state management, while Socket.io, with its real-time communication capabilities, is integrated for instant updates. The implementation also includes the logic for handling the ultimate tic tac toe rules, such as determining which board is playable based on the previous move.
                        <br /> A future development would be to add a bot to allow for single player modes.
                    </p>
                </div>
            </>
        } />
    )
}
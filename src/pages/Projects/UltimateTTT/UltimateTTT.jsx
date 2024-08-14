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
                    <p >This is an ultimate TicTacToe implementation using javascript.</p>
                    <img 
                        src={UltimateTTT_preview}
                        alt="MechHub"
                        className="mh-img"
                    />
                    <p>
                        I used socket.io to allow for users to send a game code to their friends and play online. 
                        <br /> A future development would be to add a bot to allow for single player modes.
                    </p>
                </div>
            </>
        } />
    )
}
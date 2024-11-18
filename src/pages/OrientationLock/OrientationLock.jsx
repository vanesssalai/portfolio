import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import './OrientationLock.css';

export default function OrientationLock({ children }) {
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
        };

        checkOrientation();
        window.addEventListener('resize', checkOrientation);
        return () => window.removeEventListener('resize', checkOrientation);
    }, []);

    if (!isLandscape) {
        return (
        <div className="rotation-prompt">
            <div className="prompt-content">
                <h1>Please Rotate Your Device</h1>
                <p>This game is best played in landscape</p>
                <RotateCcw className="rotate-icon" size={48} />
            </div>
        </div>
        );
    }

    return children;
}
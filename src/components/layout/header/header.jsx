import React, { useState, useEffect } from 'react';
import Ping from 'ping.js';
import './Header.css';

export default function Header() {
    const [ping, setPing] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [timeZone, setTimeZone] = useState('');

    const measurePing = async () => {
        const p = new Ping();
        try {
            const result = await p.ping('https://www.google.com');
            setPing(Math.round(result));
        } catch (error) {
            console.error('Error measuring ping:', error);
            setPing(null);
        }
    };

    useEffect(() => {
        measurePing();

        const interval = setInterval(() => {
            measurePing();
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);
            setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <header className="gameHeader">
            <div className="headerItem">
                <span className="label">Ping:</span>
                <span className="value">{ping !== null ? `${ping}ms` : 'Measuring...'}</span>
            </div>
            <div className="headerItem">
                <span className="label">Time:</span>
                <span className="value">
                    {currentTime.toLocaleTimeString()} {timeZone}
                </span>
            </div>
        </header>
    );
}
import React from 'react';
import './footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Vanessa Lai</p>
        </footer>
    )
}
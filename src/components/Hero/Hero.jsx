import './Hero.css';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    return (
        <div id='hero' className="hero-container">
            <div className='hero-text'>
                <h1>Hi! I'm Vanessa</h1>
                <p>
                    A Year 2 Business Analytics Student at the National University of Singapore
                </p>
                <p>
                    Coffee Addict · Casual Coder · Cat Enthusiast
                </p>
                <div className="link-button">
                    <a href='#about' className="link">
                        Learn More About Me Below <FaArrowDown />
                    </a>
                </div>
            </div>
        </div>
    )
}
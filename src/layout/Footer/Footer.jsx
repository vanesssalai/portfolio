import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {

    return (
        <footer>
            <div className=''>
                <h3>Connect with me!</h3>
                <a className='footer-icon'>
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    )
}
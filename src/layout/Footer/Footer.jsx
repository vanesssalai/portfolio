import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {

    return (
        <footer>
            <div className='footer-content'>
                <h3>Connect with me!</h3>
                <a className='footer-icon'>
                    <FaLinkedin  color="#0077B5"/>
                </a>
            </div>
        </footer>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as FacebookLogo } from '../../images/facebook.svg'; 

import './footer.component.styles.css';

const Footer = () => {
    return (
        <div className="wrapper">
        <footer>
            <div>
                <span className="stipt">STIPT VERVOER</span>
                <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/busreizen">Busreizen</Link></li>
                    <li><Link to="/touringcar-verhuur">Touringcar Verhuur</Link></li>
                    <li><Link to="/vip-diensten">VIP Diensten</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <hr></hr>
            <div className="fb-logo">
            <FacebookLogo className="fb" onClick={() => window.open("https://www.facebook.com", '_blank')}/>
            </div>
            <div className="contact">
         
                <div className="contact-container">
                    <div>
                        <span>STIPT VERVOER</span>
                    </div>
                    <span className="contact-text">Touringcar verhuur: +31 (0)70 889 32 33</span>
                    <span className="contact-text">Busreizen: +31 (0)70 889 32 33</span>
                    <span className="contact-text">Email: <a id="email" href="mailto:info@stiptvervoer.nl">info@stiptvervoer.nl</a></span>
                </div>
            </div>
        </footer>
        <hr />
        <div className="footer-of-footer">
            <span>&copy; Stipt Vervoer 2020</span>
        </div>
        </div>
    );
}

export default Footer;
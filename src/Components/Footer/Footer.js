import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
           {new Date().getFullYear()} Copyright Colin and Samuel Lightfoot.
        </footer>
    );
}


export default Footer;
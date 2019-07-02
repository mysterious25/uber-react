import React from 'react';
import WhiteLogo from './image/white-logologo2.svg'
import './Footer.css';

export function Footer () {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                    <img src={WhiteLogo} alt={WhiteLogo}/>
            </div>
        </div>
    )
}
import React from 'react';
import logoLogo1 from './image/logologo1.svg';
import basketbasket from './image/basketbasket.svg';
import "./headerModule.css";
import {Link} from 'react-router-dom';


export function Header() {
    return (
        <div className="header">
            <div className="header__wrapper">
                <Link className="Styles.header__link" to="/"><img className="header__logo" src={logoLogo1} alt="logo"/></Link>
                <div className="header__order">
                    <button className="header__time">Asap</button>
                    <span className="header__span">to</span>
                    <label className="header__label">
                        <input type="text" className="header__input" placeholder="ul. Pobedi St, 16"/>
                    </label>
                </div>
                <div className="header__wrapper__button">
                    <button className="header__signin">Sing in</button>
                    <button className="header__black">Register</button>
                    <img src={basketbasket} className="header__basket" alt="basket"/>
                </div>
            </div>
        </div>
    )
}
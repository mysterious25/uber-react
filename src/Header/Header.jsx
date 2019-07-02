import React from 'react';
import logoLogo1 from './logologo1.svg';
import basketbasket from './basketbasket.svg';
import Styles from './Header.module.css'
import {Link} from 'react-router-dom';


export function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.header__wrapper}>
                <Link className={Styles.header__wrapper__link} to="/"><img className={Styles.header_wrapper__img} src={logoLogo1} alt="logo"/></Link>
                <div className={Styles.header__wrapper__order}>
                    <button className={Styles.header__wrapper__order__time}>Asap</button>
                    <span className={Styles.header__wrapper__order__span}>to</span>
                    <label className={Styles.header__wrapper__order__label}>
                        <input type="text" className={Styles.header__wrapper__order__label__input} placeholder="ul. Tarasivska St, 16"/>
                    </label>
                </div>
                <div className={Styles.header__wrapper__button__wrapper}>
                    <button className={Styles.header__wrapper__button__wrapper__signin}>Sing in</button>
                    <button className={Styles.header__wrapper__button__wrapper__black}>Register</button>
                    <img src={basketbasket} className={Styles.header__wrapper__button__wrapper__img} alt="basket"/>
                </div>
            </div>
        </div>
    )
}
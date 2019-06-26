import React from 'react';
import logoLogo1 from './logologo1.svg';
import basketbasket from './basketbasket.svg';
import Styles from './Header.module.css'


export function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.header_wrapper}>
                <img className={Styles.header_wrapper__img} src={logoLogo1} alt="logo"/>
                <div className={Styles.header_order_wrapper}>
                    <button className={Styles.header_order_time}>Asap</button>
                    <span className={Styles.header_order__span}>to</span>
                    <label className={Styles.header_order__label}>
                        <input type="text" className={Styles.header_order__input} placeholder="ul. Tarasivska St, 16"/>
                    </label>
                </div>
                <div className={Styles.cabinet_wrapper_button__wrapper}>
                    <button className={Styles.cabinet_button__signin}>Sing in</button>
                    <button className={Styles.cabinet_button__black}>Register</button>
                    <img src={basketbasket} className={Styles.cabinet_button__img} alt="basket"/>
                </div>
            </div>
        </div>
    )
}
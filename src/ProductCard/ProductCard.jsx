import React from 'react';
import './ProductCard.css';
import Mc from './mc.png'

export function ProductCard() {
    return (
        <li className="card_products">
            <img src={Mc} alt={Mc}/>
            <span className="name_restaurant">Mcdonalds</span>
            <span className="name_category">₴₴ • Бургеры</span>
            <span className="card_time">35 - 45 Min</span>
        </li>
    )
}
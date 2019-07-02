import React from 'react';
import './ProductCard.css';
import Capture from './image/Capture.png';
import {Link} from 'react-router-dom';

export function ProductCard () {
    return (
        <li className="restaurant_card_products">
            <div className="restaurant_card_info">
                <span className="restaurant_card_name">Сельдь на бородинско</span>
                <span className="restaurant_card_price">240 ₽</span>
            </div>
            <Link to="/"><img src={Capture} alt={Capture}/></Link>
        </li>
    )
}
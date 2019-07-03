import React from 'react';
import './ProductCard.css';
import Capture from './image/Capture.png';
import {Link} from 'react-router-dom';

export function ProductCard () {
    return (
        <li className="restaurant__productCard">
            <div className="restaurant__cardInfo">
                <span className="restaurant__cardName">Сельдь на бородинско</span>
                <span className="restaurant__cardPprice">240 ₽</span>
            </div>
            <Link to="/"><img src={Capture} alt={Capture}/></Link>
        </li>
    )
}
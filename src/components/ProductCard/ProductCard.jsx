import React from 'react';
import './ProductCard.css';
import Mc from './image/mc.png'
import {Link} from "react-router-dom";

export function ProductCard(props) {
    return (
        <li className="productCard">
            <Link to="restaurant">
                <img className="productCard__mc" src={props.imageUrl} alt={Mc}/>
            </Link>
                <span className="productCard__restaurant">{props.title}</span>
                <span className="productCard__category">{props.priceBucket}{props.categories.map((categori, i) => { return '•' + categori.name })}</span>
                <span className="productCard__time">{props.etaRange.min} - {props.etaRange.max}</span>
        </li>
    )
}
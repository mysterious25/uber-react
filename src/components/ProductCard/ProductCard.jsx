import React from 'react';
import './ProductCard.css';
import Mc from './image/mc.png'
import {Link} from "react-router-dom";

export function ProductCard(props) {
    return (
        <li className="card_products">
            <Link to="restaurant">
                <img className="card_products_img" src={props.imageUrl} alt={Mc}/>
            </Link>
                <span className="name_restaurant">{props.title}</span>
                <span className="name_category">{props.priceBucket}{props.categories.map((categori, i) => { return '•' + categori.name })}</span>
                <span className="card_time">{props.etaRange.min} - {props.etaRange.max}</span>

        </li>
    )
}
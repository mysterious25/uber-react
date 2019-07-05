import React from 'react';
import './ProductCard.css';
import Capture from './image/Capture.png';
import {Link} from 'react-router-dom';
import {menu} from "../menu";

export function ProductCard (props) {
    let dishPhoto =  menu.items[props.id].imageUrl;
    return (
        <div className="restaurant__productCardWrapper">
            <li className="restaurant__productCard">
                <div className="restaurant__cardInfo">
                    <span className="restaurant__cardName">{menu.items[props.id].title}</span>
                    <span className="restaurant__description">{menu.items[props.id].itemDescription}</span>
                    <span className="restaurant__cardPprice">{menu.items[props.id].price / 100}</span>
                </div>
                <Link to="/">
                    {dishPhoto && (
                        <img className="restaurant__img" src={menu.items[props.id].imageUrl} alt={Capture}/>
                    )}
                </Link>
            </li>
        </div>
    )
}
import React from 'react';
import './TypeFood.css';


export function TypeFood(props) {
    return (
        <li className="restaurant-navigation_item">
            <a href={props.anchor} className="type-food">
                {props.type}
            </a>
        </li>
    )
}
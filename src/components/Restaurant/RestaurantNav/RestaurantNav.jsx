import React from 'react';
import './RestaurantNav.css';
import {menu} from "../ProductList/menu";

export function RestaurantNav () {
    return (
        <nav className="restaurant-navigation">
            <ul className="restaurant-navigation-list">
                {menu.sections.map((section, i) => {
                    return (
                        <li className="restaurant-navigation_item">
                            <a className="restaurant-navigation__link"
                               href={`#${section.title}`}>
                            </a>
                            {section.title}
                        </li>
                    )
                    }
                )}
            </ul>
        </nav>
    )
}
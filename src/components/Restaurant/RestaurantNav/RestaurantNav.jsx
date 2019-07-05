import React from 'react';
import './RestaurantNav.css';
import {menu} from "../ProductList/menu";
import {Link} from  "react-router-dom";

export function RestaurantNav () {
    return (
        <nav className="restaurant-navigation">
            <ul className="restaurant-navigation-list">
                {menu.sections.map((section, i) => {
                    return (
                        <li className="restaurant-navigation_item">
                            <Link className="restaurant-navigation__link"
                               to={`#${section.title}`}>
                            </Link>
                            {section.title}
                        </li>
                    )
                    }
                )}
            </ul>
        </nav>
    )
}
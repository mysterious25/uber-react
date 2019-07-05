import React from 'react';
import './RestaurantNav.css';
import {menu} from "../ProductList/menu";
import {TypeFood} from "../../TypeFood/TypeFood";

export function RestaurantNav () {
    return (
        <nav className="restaurant-navigation">
            <div className="restaurant-navigation__wrapper">
                <ul className="restaurant-navigation-list">
                    {menu.sections.map((section, i) => {
                        return (
                            <TypeFood
                            key={i}
                            anchor={`#${section.title}`}
                            type={section.title}
                            />
                        )
                        }
                    )}
                </ul>
            </div>
        </nav>
    )
}
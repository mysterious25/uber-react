import React from 'react';
import './RestaurantNav.css';

export function RestaurantNav () {
    return (
        <nav className="restaurant-navigation">
            <ul className="restaurant-navigation-list">
                <li className="restaurant-navigation_item">Закуски</li>
                <li className="restaurant-navigation_item">Салаты</li>
                <li className="restaurant-navigation_item">Супы</li>
                <li className="restaurant-navigation_item">Горячие блюда</li>
                <li className="restaurant-navigation_item">Гарниры</li>
                <li className="restaurant-navigation_item">Десерты</li>
            </ul>
        </nav>
    )
}
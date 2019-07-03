import React from 'react';
import './RestaurantPreview.css';

export function RestaurantPreview () {
    return (
        <div className="restaurant-preview">
            <div className="restaurant-preview__card">
                <div className="restaurant-preview__wrapper">
                    <span className="restaurant-preview__title">Трактир «Пушкин»</span>
                    <div className="restaurant-preview__footer">
                        <span className="restaurant-preview__price">₽₽₽ • Европейская</span>
                        <span className="restaurant-preview__time">25 - 35 Min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
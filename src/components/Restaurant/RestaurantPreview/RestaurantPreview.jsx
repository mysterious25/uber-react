import React from 'react';
import './RestaurantPreview.css';

export function RestaurantPreview () {
    return (
        <div className="restaurant-preview__background">
            <div className="presentation_card">
                <div className="presentetion_card_wrapper">
                    <span className="presentetion_card_title">Трактир «Пушкин»</span>
                    <div className="presentetion_card_footer">
                        <span className="presentetion_card_price">₽₽₽ • Европейская</span>
                        <span className="presentetion_card_time">25 - 35 Min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
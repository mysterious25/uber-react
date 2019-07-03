import React from 'react';
import {RestaurantTitle} from "../RestaurantTitle/RestaurantTitle";
import {ProductList} from "../ProductList/ProductList";

export function ProductListWrapper() {
    return (
        <div className="productListWrapper">
            <RestaurantTitle/>
            <ProductList/>
        </div>
    )
}

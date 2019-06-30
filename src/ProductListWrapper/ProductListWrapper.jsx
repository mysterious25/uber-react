import React from 'react';
import {Restaurants} from "../Restaurants/Restaurants";
import {ProductList} from "../ProductList/ProductList";

export function ProductListWrapper() {
    return (
        <div className="product_list">
            <Restaurants/>
            <ProductList/>
        </div>
    )
}

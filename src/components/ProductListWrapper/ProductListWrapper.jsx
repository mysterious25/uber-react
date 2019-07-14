import React from 'react';
import { RestaurantTitle } from "../RestaurantTitle/RestaurantTitle";
import { ProductList } from "../ProductList/ProductList";

export function ProductListWrapper(props) {
    return (
        <div className="productListWrapper">
            <RestaurantTitle/>
            <ProductList searchValue={props.searchValue}/>
        </div>
    )
}

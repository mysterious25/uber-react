import React from 'react';
import {RestaurantPreview} from "./RestaurantPreview/RestaurantPreview";
import {RestaurantNav} from "./RestaurantNav/RestaurantNav";
import {ProductLIst} from "./ProductList/ProductList";


export function Restaurant () {
    return (
        <div>
            <RestaurantPreview/>
            <RestaurantNav/>
            <ProductLIst/>
        </div>
    )
}
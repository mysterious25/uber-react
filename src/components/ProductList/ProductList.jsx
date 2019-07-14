import React from 'react';
import './ProductList.css';
import {ProductCard} from "../ProductCard/ProductCard";
import {restaurantMenus} from './restaurants';



export function ProductList(props) {
    return (
        <ul className="productList">
            {restaurantMenus
                .filter((restaurantMenu) => restaurantMenu.title.includes(props.searchValue))
                .map((restaurantMenu, i) => {
                return (
                    <ProductCard key={i}
                                 title={restaurantMenu.title}
                                 categories={restaurantMenu.categories}
                                 priceBucket={restaurantMenu.priceBucket}
                                 etaRange={restaurantMenu.etaRange}
                                 imageUrl={restaurantMenu.imageUrl}
                    />
                )
            })}
        </ul>
    )
}
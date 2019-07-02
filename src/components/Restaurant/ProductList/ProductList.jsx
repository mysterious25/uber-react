import React from 'react';
import {ProductCard} from "./ProductCard/ProductCard";
import './ProductList.css';


export function ProductLIst () {
    return (
        <ul className="restaunt_product_cards">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </ul>
    )
}
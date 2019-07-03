import React from 'react';
import {ProductCard} from "./ProductCard/ProductCard";
import './ProductList.css';


export function ProductLIst () {
    return (
        <ul className="restaurant__productList">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </ul>
    )
}
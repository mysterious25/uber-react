import React from 'react';
import './ProductList.css';
import {ProductCard} from "../ProductCard/ProductCard";


export function ProductList() {
    return (
    <ul className="product_cards">

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </ul>
    )
}
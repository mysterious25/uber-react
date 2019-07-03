import React from 'react';
import './main.css';
import {Search} from "../Search/Search";
import {ProductListWrapper} from "../ProductListWrapper/ProductListWrapper";

export function Main() {
    return (
        <div className="main">
            <Search/>
            <ProductListWrapper/>
        </div>
    )
}
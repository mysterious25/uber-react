import React from 'react';
import Styles from './Main.module.css';
import {Search} from "../Search/Search";
import {ProductListWrapper} from "../ProductListWrapper/ProductListWrapper";

export function Main() {
    return (
        <div className={Styles.main_wrapper}>
            <Search/>
            <ProductListWrapper/>
        </div>
    )
}
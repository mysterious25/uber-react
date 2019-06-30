import React from 'react';
import Styles from './Main.module.css';
import {Search} from "../Search/Search";


export function Main() {
    return (
        <div className={Styles.main_wrapper}>
            <Search/>
        </div>
    )
}
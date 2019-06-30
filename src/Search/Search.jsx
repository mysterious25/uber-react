import React from 'react';
import Styles from './Search.module.css';

export function Search() {
    return (
        <div className="search_wrapper">
            <label className="search_label">
                <input type="text" className="search" placeholder="Search for restaurant or cuisine"/>
            </label>
        </div>
    )
}
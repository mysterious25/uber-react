import React from 'react';
import {ProductCard} from "./ProductCard/ProductCard";
import './ProductList.css';
import {menu} from "./menu";

export function ProductLIst () {
    return (
        <ul className="restaurant__productList">
            {menu.sections.map((section, i) => {
                return(
                    <>
                        <div className="restaurant__chooseBlock">
                            <span className="restaurant__chooseTitle" id={`${section.title}`}>{section.title}</span>

                    <div key={i}>
                        {section.itemUuids.map((item, i) => {
                            return <ProductCard key={i} id={item}/>
                        })}
                    </div>
                        </div>
                    </>
                );
            })}

        </ul>
    )
}
import React from 'react';
import './main.css';
import {Search} from "../Search/Search";
import {ProductListWrapper} from "../ProductListWrapper/ProductListWrapper";

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    updateSearchValue = searchValue => {
        this.setState({
            searchValue: searchValue
        });
    };

    render () {
        return (
            <div className="main">
                <Search onSearchChange={this.updateSearchValue}/>
                <ProductListWrapper searchValue={this.state.searchValue}/>
            </div>
        )
    }
}
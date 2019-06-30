import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Footer} from "./Footer/Footer";
import {Restaurant} from "./Restaurant/Restaurant";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Route path="/"
                       exact
                       component={Main}/>
                       <Route
                           path="/restaurant"
                           component={Restaurant}
                       />

            </Router>
            <Footer/>
        </div>
    );
}

export default App;
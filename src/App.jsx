import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {Restaurant} from "./components/Restaurant/Restaurant";


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
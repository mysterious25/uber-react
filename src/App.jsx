import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Route path="/"
                       exact
                       component={Main}/>

            </Router>
        </div>
    );
}

export default App;
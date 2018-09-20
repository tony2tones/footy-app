import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import History from '../Components/History/History';
import TodaysMatch from '../Components/TodaysMatch/TodaysMatch';

import './Footy.css';

class Footy extends Component {
    render() {

        return (
            <div className="Footy">            
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home </NavLink></li>
                            <li><NavLink to="/history">History</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/history" exact component={History} />
                <Route path="/" exact component={TodaysMatch} />                
            </div>
        )
    }
}

export default Footy;
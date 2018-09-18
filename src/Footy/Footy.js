import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import History from '../Components/History/History';
import TodaysMatch from '../Components/TodaysMatch/TodaysMatch';

import './Footy.css';

class Blog extends Component {
    render() {

        return (
            <div className="Blog">            
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home </Link></li>
                            <li><Link to="/history">History</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/history" exact component={History} />
                <Route path="/" exact component={TodaysMatch} />                
            </div>
        )
    }
}

export default Blog;
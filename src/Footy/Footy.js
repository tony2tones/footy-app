import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import History from '../History/History';
import TodaysMatch from '../TodaysMatch/TodaysMatch';

import './Blog.css';

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
                <Route path="/" exact component={TodaysMatch} />
                <Route path="#history" exact component={History} />
            </div>
        )
    }
}

export default Blog;
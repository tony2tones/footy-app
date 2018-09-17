import React, { Component } from "react";
import { Route } from "react-router-dom";

import History from '../History/History';
import TodaysMatch from '../TodaysMatch/TodaysMatch';

class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home </a></li>
                            <li><a href="/history">History</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=> <div>Home</div>}/>
                <Route path="/" render={()=> <div>Home 2</div>}/> */}
                <Route path="/" exact component={TodaysMatch} />
                <Route path="/#/history" exact component={History} />
            </div>
        )
    }
}

export default Blog;

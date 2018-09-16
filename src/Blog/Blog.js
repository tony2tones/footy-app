import React, { Component } from "react";
import { Route } from "react-router-dom";

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
                <Route path="/" exact render={()=> <div>Home</div>}/>
                <Route path="/" render={()=> <div>Home 2</div>}/>
            </div>
        )
    }
}

export default Blog;

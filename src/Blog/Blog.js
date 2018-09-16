import React, { Component } from "react";



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
                <Route />
            </div>
        )
    }
}

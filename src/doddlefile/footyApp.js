import React, { Component } from "react";

import './Components/history';

class FootyApp extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/history">Previous Games</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    <History />
                </section>
            </div>
        );
    }
}

export default FootyApp;
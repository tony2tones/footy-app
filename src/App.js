import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import Blog from './Footy/Footy';

class App extends Component {

    render() {
        return (
            <div>
                <HashRouter>
                    <Blog />
                </HashRouter>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));

export default App;
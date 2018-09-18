import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Blog from './Footy/Footy';

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Blog />
                </BrowserRouter>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));

export default App;
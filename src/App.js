import React, { Component } from "react";
import ReactDOM from "react-dom";
import request from "superagent";
import { BrowserRouter } from 'react-router-dom';

import FootyApp from './FootyApp/footyApp';

import './App.css';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="Blog">

                    <FootyApp />
                </div >
            </BrowserRouter>
        );
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
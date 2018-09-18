import React, { Component } from "react";
import ReactDOM from "react-dom";
// import request from "superagent";
import { BrowserRouter } from "react-router-dom";

// import History from './History/History';
// import TodaysMatch from './TodaysMatch/TodaysMatch';
import Blog from './Blog/Blog';

// import './App.css';

// // Constant variables
// const apiKEY = 'a04860c9a603472bf0254b397f68fa5db177a1cd6b00e11707023603a957d89f';
// const baseUrl = 'https://apifootball.com/api/?action=';
// const resutsUrl = 'https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01';

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
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
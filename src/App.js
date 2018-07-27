import React, { Component } from "react";
import ReactDOM from "react-dom";


// Constant variables
const apiKEY = 'a04860c9a603472bf0254b397f68fa5db177a1cd6b00e11707023603a957d89f';
const baseUrl = 'https://apifootball.com/api/?action=';

class App extends Component {
    static apiForeCast(latitude, longitude) {
        return `${apiForeCast}?lat=${latitude}&lon=${longitude}&appid=${apiKEY}`;
    }
    constructor() {
        super(); {

        }
    }
    componentDidMount() {
        // https://apifootball.com/api/?action=get_H2H&firstTeam=Chelsea&secondTeam=Arsenal&APIkey=
    }

    render() {
        return (
            <div>
                <p>React here!</p>
            </div >
        );
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
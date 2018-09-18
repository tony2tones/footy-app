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
<<<<<<< HEAD
    static headToHead(teamA, teamB) {
        return `${baseUrl}get_H2H&firstTeam=${teamA}&firstTeam=${teamB}&APIkey=${apiKEY}`;
    }
    constructor(props) {
        super(props); {
            this.state = {
                isLoading: true,
                showResults: false,
                teamA: 'Chelsea',
                teamB: 'Liverpool',
                response: '',
            }
        }
    }

    homeTeamChange = (event) => {
        this.setState({
            teamA: event.target.value
        });
    }
    AwayTeamChange = (event) => {
        this.setState({
            teamB: event.target.value
        });
    }

    componentDidMount() {

        if (this.state.teamA != null) {
            this.hToH(this.state.teamA, this.state.teamB);

        } else {
            console.log('this has failed');
        }
    }

    hToH(teamB, teamA) {
        request
            .get(`https://apifootball.com/api/?action=get_H2H&firstTeam=${teamA}&secondTeam=${teamB}&APIkey=${apiKEY}`)
            .set('accept', 'json')
            .then((res) => {
                console.log(res.body);
                this.setState({
                    response: res.body,
                    // isLoading: false,
                    // showResults: true
                });

            })
            .catch(() => {

                // will handel this later
            });
    };

    //https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=62&APIkey=xxxxxxxxxxxxxx

=======
    
>>>>>>> d64987dac0fe11299253fbbe566276d4b84abc2f
    render() {
        return (
            <div>
<<<<<<< HEAD
                <div className="wrapper">
                    <History
                        hToH={() => { this.hToH(this.state.teamA, this.state.teamB) }}
                        homeTeamChange={(e) => { this.homeTeamChange.bind(this) }}
                        AwayTeamChange={(e) => { this.AwayTeamChange.bind(this) }}
                        teamNameList={this.state.response}
                    />
                    <TodaysMatch />
                </div>
=======
                <BrowserRouter>
                    <Blog />
                </BrowserRouter>
>>>>>>> d64987dac0fe11299253fbbe566276d4b84abc2f
            </div>
        );
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
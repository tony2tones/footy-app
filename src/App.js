import React, { Component } from "react";
import ReactDOM from "react-dom";
import request from "superagent";

import HomeTeamInput from './HomeTeamInput/HomeTeamInput';
import AwayTeamInput from './AwayTeamInput/AwayTeamInput';
import PastResults from "./PastResults/PastResults";
import Score from './Score/Score';

import './App.css';

// Constant variables
const apiKEY = 'a04860c9a603472bf0254b397f68fa5db177a1cd6b00e11707023603a957d89f';
const baseUrl = 'https://apifootball.com/api/?action=';
const resutsUrl = 'https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01';

class App extends Component {
    static headToHead(teamA, teamB) {
        return `${baseUrl}get_H2H&firstTeam=${teamA}&firstTeam=${teamB}&APIkey=${apiKEY}`;
    }
    constructor(props) {
        super(props); {
            this.state = {
                teamA: 'Chelsea',
                teamB: 'Liverpool',
                teamAScore1: '',
                teamBScore1: '',
                teamAScore2: '',
                teamBScore2: '',
                teamAScore3: '',
                teamBScore3: '',
                teamAScore4: '',
                teamBScore4: '',
                teamAScore5: '',
                teamBScore5: '',
                teamAScore6: '',
                teamBScore6: '',
                teamHome: '',
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
                    response: res.body.firstTeam_VS_secondTeam,
                });

            })
            .catch(() => {

                // will handel this later
            });
    };

    Scores = ([response]) => {
        const teamScores = response.map((teamScore) =>
            <li>{teamScore}</li>
        );
        return (
            <ul>{teamScores}</ul>
        )
    }

    //https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=62&APIkey=xxxxxxxxxxxxxx

    render() {
        
        // const data = [{ "name": "test1" }, { "name": "test2" }];
        const listItems = response.map((d) => <li key={d.match_awayteam_name}>{d.match_awayteam_name}</li>);

        return (
            <div>
                <h2>Footy App!</h2>
                <div className="vs">
                    <HomeTeamInput changed={this.homeTeamChange.bind(this)} homeTeam={this.state.teamA} />
                    <AwayTeamInput changed={this.AwayTeamChange.bind(this)} awayTeam={this.state.teamB} />
                    <PastResults
                        teamName={[this.state.response]}
                    />
                   
                </div>
            </div >
        );
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
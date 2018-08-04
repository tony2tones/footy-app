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
                    response: res,
                });
                console.log("match away score ", this.state.response.body.firstTeam_VS_secondTeam[1].match_awayteam_name, ' ', this.state.response.body.firstTeam_VS_secondTeam[1].match_awayteam_score
                );
                console.log("match home score ", this.state.response.body.firstTeam_VS_secondTeam[1].match_hometeam_name, ' ', this.state.response.body.firstTeam_VS_secondTeam[1].match_hometeam_score
                );
                this.mapResults(res.body);
            })
            .catch(() => {

                // will handel this later
            });
    };

    //https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=62&APIkey=xxxxxxxxxxxxxx
    mapResults(data) {
        const teamAScore1 = data.firstTeam_VS_secondTeam[0].match_hometeam_score;
        const teamBScore1 = data.firstTeam_VS_secondTeam[0].match_awayteam_score;
        const teamAScore2 = data.firstTeam_VS_secondTeam[1].match_hometeam_score;
        const teamBScore2 = data.firstTeam_VS_secondTeam[1].match_awayteam_score;
        const teamAScore3 = data.firstTeam_VS_secondTeam[2].match_hometeam_score;
        const teamBScore3 = data.firstTeam_VS_secondTeam[2].match_awayteam_score;
        this.setState({
            teamBScore1: teamBScore1,
            teamAScore1: teamAScore1,
            teamBScore2: teamBScore2,
            teamAScore2: teamAScore2,
            teamBScore3: teamBScore3,
            teamAScore3: teamAScore3
        })
    }


    render() {

        return (
            <div>
                <p>Footy App!</p>
                <div className="vs">
                    <HomeTeamInput changed={this.homeTeamChange.bind(this)} homeTeam={this.state.teamA} />
                    <AwayTeamInput changed={this.AwayTeamChange.bind(this)} awayTeam={this.state.teamB} />
                    <PastResults
                        homeTeam={this.state.teamAScore1}
                        awayTeam={this.state.teamBScore1}
                    />
                    <PastResults
                        homeTeam={this.state.teamAScore2}
                        awayTeam={this.state.teamBScore2}
                    />
                    <PastResults
                        homeTeam={this.state.teamAScore3}
                        awayTeam={this.state.teamBScore3}
                    />
                </div >
            </div>
        );
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
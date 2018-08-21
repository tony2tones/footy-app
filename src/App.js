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
                });

            })
            .catch(() => {

                // will handel this later
            });
    };

    //https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=62&APIkey=xxxxxxxxxxxxxx

    render() {

        const teamNameList = this.state.response;
        // console.log('this is the state response ',this.state.response);
        // var teamNameList = this.state.response;

        var firstTeamVsSecondTeam = teamNameList.firstTeam_VS_secondTeam || [];
        firstTeamVsSecondTeam.map(matchDetails => {
            console.log(matchDetails);
        });

        // for (const toast in teamNameList.firstTeam_VS_secondTeam) {
        //     console.log('what is the toast? ', toast);
        //   }
        // for (const match of teamNameList) {
        //     console.log('watch match id', match);
        //   }
        // let i = 0;
        
        // for(i ; i < teamNameList.length,i++;) {
        //     console.log(`obj.${prop} = ${obj[prop]}`)
        // }
        // teamNameList.map(function(d, index) {

        //     console.log(d.teamNameList[0].match_awayteam_score);
        // })
        // console.log('this is the team name ', teamNameList.firstTeam_VS_secondTeam);


        return (
            <div>
                <h2>Footy App!</h2>
                <div className="vs">
                    <HomeTeamInput changed={this.homeTeamChange.bind(this)} homeTeam={this.state.teamA} />
                    <AwayTeamInput changed={this.AwayTeamChange.bind(this)} awayTeam={this.state.teamB} />
                    <PastResults
                        score={this.state.response.firstTeam_VS_secondTeam}
                    />
                </div>
            </div >
        );
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
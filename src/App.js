import React, { Component } from "react";
import ReactDOM from "react-dom";
import request from "superagent";

import HomeTeamInput from './HomeTeamInput/HomeTeamInput';
import PastResults from "./PastResults/PastResults";

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
                response: '',
            }
        }
    }

    homeTeamChange = (event) => {
        this.setState({
            teamA: event.target.value
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
            })
            .catch(() => {

                // will handel this later
            });
    };

    //https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=62&APIkey=xxxxxxxxxxxxxx



    render() {
        return (
            <div>
                <p>React here!</p>
                <HomeTeamInput changed={this.homeTeamChange.bind(this)} />
                <PastResults home={this.state.teamA} />
                <PastResults away={this.state.teamB} />

            </div >
        );
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
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
                response: [],
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
                

                // newTeamStructure.map(function(index,current){
                //     current.match_hometeam_name = current.teamhome;
                //     current.match_awayteam_name = current.teamaway;
                //     console.log('current', current)
                //     console.log('index', index)
                // });
                const homeTeam = newTeamStructure;
                let teamNameAway = newTeamStructure.map(toast => toast.match_awayteam_name);


                let teamNameHome = newTeamStructure.map(toast => toast.match_hometeam_name);
                console.log('Home team ', teamNameHome[0], ' ', teamNameAway[0]);
                console.log('Away team ', teamNameAway[1]);

                console.log(newTeamStructure);
                console.log("match away score ", this.state.response.body.firstTeam_VS_secondTeam[2].match_awayteam_name, ' ', this.state.response.body.firstTeam_VS_secondTeam[1].match_awayteam_score
                );
                console.log("match home score ", this.state.response.body.firstTeam_VS_secondTeam[2].match_hometeam_name, ' ', this.state.response.body.firstTeam_VS_secondTeam[1].match_hometeam_score
                );
                // this.mapResults(res.body);
            })
            .catch(() => {

                // will handel this later
            });
    };

    //https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=62&APIkey=xxxxxxxxxxxxxx
    // mapResults(data) {
    //     const teamAScore1 = data.firstTeam_VS_secondTeam[0].match_hometeam_score;
    //     const teamBScore1 = data.firstTeam_VS_secondTeam[0].match_awayteam_score;
    //     const teamAScore2 = data.firstTeam_VS_secondTeam[1].match_hometeam_score;
    //     const teamBScore2 = data.firstTeam_VS_secondTeam[1].match_awayteam_score;
    //     const teamAScore3 = data.firstTeam_VS_secondTeam[2].match_hometeam_score;
    //     const teamBScore3 = data.firstTeam_VS_secondTeam[2].match_awayteam_score;
    //     const teamAScore4 = data.firstTeam_VS_secondTeam[3].match_hometeam_score;
    //     const teamBScore4 = data.firstTeam_VS_secondTeam[3].match_awayteam_score;
    //     const teamAScore5 = data.firstTeam_VS_secondTeam[4].match_hometeam_score;
    //     const teamBScore5 = data.firstTeam_VS_secondTeam[4].match_awayteam_score;
    //     const teamAScore6 = data.firstTeam_VS_secondTeam[5].match_hometeam_score;
    //     const teamBScore6 = data.firstTeam_VS_secondTeam[5].match_awayteam_score;
    //     this.setState({
    //         teamBScore1: teamBScore1,
    //         teamAScore1: teamAScore1,
    //         teamBScore2: teamBScore2,
    //         teamAScore2: teamAScore2,
    //         teamBScore3: teamBScore3,
    //         teamAScore3: teamAScore3,
    //         teamBScore4: teamBScore4,
    //         teamAScore4: teamAScore4,
    //         teamBScore5: teamBScore5,
    //         teamAScore5: teamAScore5,
    //         teamBScore6: teamBScore6,
    //         teamAScore6: teamAScore6
    //     })
    // }

    // teamName() {
    //     const team = newTeamStructure.map((index, current) => {
    //         current.match_hometeam_name = current.teamhome;
    //         current.match_awayteam_name = current.teamaway;
    //         console.log('current', current)
    //         console.log('index', index)
    //     });
    // }

        render() {

            const teamNameList = this.state.response;
            
            let result = Object.keys(teamNameList).map(function(key) {
                return [Number(key), teamNameList[key]];
              });
              
              console.info(result[1]);
                // console.log('this is the team name ' , teamNameList.firstTeam_VS_secondTeam);
            // })

            return (
                <div>
                    <h2>Footy App!</h2>
                    <div className="vs">
                        <HomeTeamInput changed={this.homeTeamChange.bind(this)} homeTeam={this.state.teamA} />
                        <AwayTeamInput changed={this.AwayTeamChange.bind(this)} awayTeam={this.state.teamB} />
                        {/* <PastResults
                            score={this.state.response.body}
                        /> */}
                       

                    </div>
                </div >
            );
        }
    }
    export default App;
    ReactDOM.render(<App />, document.getElementById("app"));
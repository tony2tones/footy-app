import React, { Component } from "react";
import axios from 'axios';

import HomeTeamInput from './HomeTeamInput/HomeTeamInput';
import AwayTeamInput from './AwayTeamInput/AwayTeamInput';
import AwayTeam from './AwayTeam/AwayTeam';
import HomeTeam from './HomeTeam/HomeTeam';
import Date from './Date/Date';

import './history.css'

// Constant variables
const apiKEY = 'a04860c9a603472bf0254b397f68fa5db177a1cd6b00e11707023603a957d89f';
const baseUrl = 'https://apifootball.com/api/?action=';

class History extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                isLoading: true,
                showResults: false,
                teamA: 'Chelsea',
                teamB: 'Liverpool',
                response: '',
            };
            this.homeTeamChange = this.homeTeamChange.bind(this);
            this.AwayTeamChange = this.AwayTeamChange.bind(this);
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
            this.headToHead(this.state.teamA, this.state.teamB);
        } else {
            console.log('this has failed');
        }
    }
    headToHead(teamB, teamA) {
        axios.get(`${baseUrl}get_H2H&firstTeam=${teamA}&secondTeam=${teamB}&APIkey=${apiKEY}`)
            .then((res) => {
                // const results = res.data.slice(0,1);
                console.log(res.data);
                this.setState({
                    response: res.data,
                    // isLoading: false,
                    // showResults: true
                });
            })
            .catch(() => {
                // will handel this later
            });
    };
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div>
                        <HomeTeamInput changed={this.homeTeamChange} HomeTeam={this.state.teamA} />
                        <AwayTeamInput changed={this.AwayTeamChange} AwayTeam={this.state.teamB} />
                        <button onClick={() => { this.headToHead(this.state.teamA, this.state.teamB) }}>Past results </button>
                    </div>
                    <div className="boarder">
                        <div className="container">
                        <Date
                            teamNameList={this.state.response}
                        />
                        <HomeTeam
                            teamNameList={this.state.response}
                        />
                        <AwayTeam 
                            teamNameList={this.state.response}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default History;
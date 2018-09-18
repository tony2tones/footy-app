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
        console.log(this.state)
        if (this.state.teamA != null) {
            this.hToH(this.state.teamA, this.state.teamB);
        } else {
            console.log('this has failed');
        }
    }
    hToH(teamB, teamA) {
        axios.get(`https://apifootball.com/api/?action=get_H2H&firstTeam=${teamA}&secondTeam=${teamB}&APIkey=${apiKEY}`)
            .then((res) => {
                console.log(res.data);

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
    render() {

        return (
            <div>
                <div>
                    <HomeTeamInput changed={this.homeTeamChange} HomeTeam={this.state.teamA} />
                    <AwayTeamInput changed={this.AwayTeamChange} AwayTeam={this.state.teamB} />
                    <button onClick={() => { this.hToH(this.state.teamA, this.state.teamB) }}>Past results </button>
                </div>
                <div className="results">
                    <Date 
                        teamNameList={this.state.response}
                    />
                    <HomeTeam />
                    <AwayTeam />
                </div>
            </div>
        )
    }
}

export default History;
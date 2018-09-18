import React, { Component } from "react";
import axios from 'axios';

// import HomeTeamInput from './HomeTeamInput/HomeTeamInput';
// import AwayTeamInput from './AwayTeamInput/AwayTeamInput';
// import AwayTeam from './AwayTeam/AwayTeam';
// import HomeTeam from './HomeTeam/HomeTeam';
// import Date from './Date/Date';

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
            }
        }
    }
    render() {
        return (
            <div>
                <div>This is the history between the teams page</div>
            </div>
        )
    }
}

export default History;
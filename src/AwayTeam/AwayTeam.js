import React from 'react';
import "babel-polyfill";

import './AwayTeam.css';

const AwayTeam = (props) => {
    var firstTeamVsSecondTeam = props.teamNameList.firstTeam_VS_secondTeam || [];
    const matchDetailsList = firstTeamVsSecondTeam.map(matchDetails => {
        return (
            <div>
                <div>{matchDetails.match_awayteam_name}</div>
                <div>{matchDetails.match_awayteam_score}</div>
            </div>
        )
    });

    return (

        <div>
            {matchDetailsList}
        </div>
    )
}

export default AwayTeam;


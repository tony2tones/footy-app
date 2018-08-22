import React from 'react';
import "babel-polyfill";

import './PastResults.css';

const PastResults = (props) => {
    var firstTeamVsSecondTeam = props.teamNameList.firstTeam_VS_secondTeam || [];
    const matchDetailsList = firstTeamVsSecondTeam.map(matchDetails => {
        return (
            <div>{matchDetails.match_awayteam_name}</div>
            // <div>{matchDetails.match_awayteam_score}</div>
        )
    });

    return (

        <div>
            {matchDetailsList}
        </div>
    )
}

export default PastResults;


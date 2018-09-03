import React from 'react';
import "babel-polyfill";

import './AwayTeam.css';

const AwayTeam = (props) => {
    var firstTeamVsSecondTeam = props.teamNameList.firstTeam_VS_secondTeam || [];
    const matchDetailsList = firstTeamVsSecondTeam.map((matchDetails, index) => {
        return (
            <div key={index}>
                <div className="nameStyling">{matchDetails.match_awayteam_name}</div>
                <div>{matchDetails.match_awayteam_score}</div>
            </div>
        )
    });

    return (
        <div>
            <h2> Away </h2>
            {matchDetailsList}
        </div>
    )
}

export default AwayTeam;


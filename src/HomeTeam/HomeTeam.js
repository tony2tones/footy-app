import React from 'react';

import './HomeTeam.css';

const HomeTeam = (props) => {
    var firstTeamVsSecondTeam = props.teamNameList.firstTeam_VS_secondTeam || [];
    const matchDetailsList = firstTeamVsSecondTeam.map(matchDetails => {
        return (
            <div>
                
                <div>{matchDetails.match_hometeam_name}</div>
                <div>{matchDetails.match_hometeam_score}</div>
            </div>
        )
    });

    return (

        <div>
            <h2> Home </h2>
            {matchDetailsList}
        </div>
    )
}

export default HomeTeam;


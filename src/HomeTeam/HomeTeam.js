import React from 'react';

import './HomeTeam.css';

const HomeTeam = (props) => {
    var firstTeamVsSecondTeam = props.teamNameList.firstTeam_VS_secondTeam || [];
    const matchDetailsList = firstTeamVsSecondTeam.map(matchDetails => {
        return (
            <div>
                <div>{matchDetails.match_hometeam_name}</div>
                <div>{matchDetails.match_hometeam_score}</div>
                <div>{matchDetails.match_date}</div>
            </div>
        )
    });

    return (

        <div>
            {matchDetailsList}
        </div>
    )
}

export default HomeTeam;


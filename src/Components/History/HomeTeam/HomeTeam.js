import React from 'react';

import './HomeTeam.css';

const HomeTeam = (props) => {

    var firstTeamVsSecondTeam = props.teamNameList.firstTeam_VS_secondTeam || [];
    firstTeamVsSecondTeam = firstTeamVsSecondTeam.slice(0,1);

    const matchDetailsList = firstTeamVsSecondTeam.map((matchDetails, index) => {
        return (
            <div key={index}>
                <div>{matchDetails.match_hometeam_name}</div>
                <div>{matchDetails.match_hometeam_score}</div>
            </div>
        )
    });

    return (
        <div>
            <h2> Home </h2>
            <div>
                <div className="boarder">
                    {matchDetailsList}
                </div>
            </div>
        </div>
    )
}

export default HomeTeam;


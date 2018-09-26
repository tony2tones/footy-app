import React from 'react';

import './date.css';

const Date = (props) => {
    
    var firstTeamVsSecondTeam = props.teamNameList.firstTeam_VS_secondTeam || [];
    // firstTeamVsSecondTeam = firstTeamVsSecondTeam.slice(0,1);
    const matchDate = firstTeamVsSecondTeam.map((matchDetails, index) => {
        return (
            <div key={index}>
                <div className="padding">{matchDetails.match_date}</div>
            </div>
        )
    });
    return (
        <div>
            <h2>Date</h2>
            <div>{matchDate}</div>
        </div>
    )
}

export default Date;
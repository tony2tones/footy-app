import React from 'react';

import './date.css';

const Date = (props) => {
    
    var teamNameList = props.response;
    var firstTeamVsSecondTeam = props.teamNameList.firstTeam_VS_secondTeam || [];
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
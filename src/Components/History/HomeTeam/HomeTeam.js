import React from 'react';

import './HomeTeam.css';

const HomeTeam = (props) => {
    var todayTeam = props.teamNameList || [];
    todayTeam = todayTeam.slice(0, 1);
    const matchDetailsList = todayTeam.map((matchDetails, index) => {
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


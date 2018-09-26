import React from 'react';

import './Previous.css';

const Previous = (props) => {
    var results = props.teamNameList.firstTeam_VS_secondTeam || [];
    // resluts = resluts.slice(0, 1);
    const matchDetailsList = results.map((matchDetails, index) => {
        return (
            <div key={index} className="boarder">
                <div>{matchDetails.match_hometeam_name}</div>
                <div>{matchDetails.match_hometeam_score}</div>
                <div>{matchDetails.match_awayteam_name}</div>
                <div>{matchDetails.match_awayteam_score}</div>
            </div>
        )
    });

    return (
        <div>
            <div>
                {matchDetailsList}
            </div>
        </div >
    )
}

export default Previous;
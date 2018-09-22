import React from 'react';

const AwayTeams = (props) => {
    var todaysMatches = props.teamNameList || [];
    // todaysMatches = todaysMatches.slice(0, 1);
    const matchDetailsList = todaysMatches.map((matchDetails, index) => {
        return (
            <div key={index}>
                <div>{matchDetails.match_awayteam_name}</div>
            </div>
        )
    });

    return (
        <div>
            <h2> Away </h2>
            <div>
                <div className="boarder">
                    {matchDetailsList}
                </div>
            </div>
        </div>
    )
}

export default AwayTeams;
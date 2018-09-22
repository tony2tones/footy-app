import React from 'react';

const HomeTeams = (props) => {
    var todaysMatches = props.teamNameList || [];
    todaysMatches = todaysMatches.slice(0, 1);
    const matchDetailsList = todaysMatches.map((matchDetails, index) => {
        return (
            <div key={index}>
                <div>{matchDetails.match_hometeam_name}</div>
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

export default HomeTeams;
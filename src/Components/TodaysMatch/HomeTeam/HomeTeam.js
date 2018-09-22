import React from 'react';

const HomeTeam = (props) => {
    var firstTeamVsSecondTeam = props.teamNameList || [];
    firstTeamVsSecondTeam = firstTeamVsSecondTeam.slice(0, 1);
    const matchDetailsList = firstTeamVsSecondTeam.map((matchDetails, index) => {
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

export default HomeTeam;
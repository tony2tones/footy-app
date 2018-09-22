import React from 'react';

const StartTimes = (props) => {
    var todaysMatches = props.teamNameList || [];
    // todaysMatches = todaysMatches.slice(0, 1);
    const matchDetailsList = todaysMatches.map((matchDetails, index) => {
        return (
            <div key={index}>
                <div>{matchDetails.match_time}</div>
            </div>
        )
    });

    return (
        <div>
            <h2> Time </h2>
            <div>
                <div className="boarder">
                    {matchDetailsList}
                </div>
            </div>
        </div>
    )
}

export default StartTimes;
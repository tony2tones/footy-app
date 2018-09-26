import React from 'react';


const Results = (props) => {
    var resluts = props.teamNameList || [];
    // resluts = resluts.slice(0, 1);
    const matchDetailsList = resluts.map((matchDetails, index) => {
        return (
            <div key={index}>
                <div>{matchDetails.match_hometeam_name}</div>
                <div>{matchDetails.match_hometeam_score}</div>
                <td>{matchDetails.match_awayteam_name}</td>
                <div className="nameStyling">{matchDetails.match_awayteam_name}</div>
                <div>{matchDetails.match_awayteam_score}</div>
            </div>
        )
    });

    return (
        <div>
            <div className="boarder">
                {matchDetailsList}
            </div>
        </div >
    )
}

export default Results;
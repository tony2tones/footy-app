import React from 'react';


const Previous = (props) => {
    var results = props.teamNameList.firstTeam_VS_secondTeam || [];
    // resluts = resluts.slice(0, 1);
    const matchDetailsList = results.map((matchDetails, index) => {
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

export default Previous;
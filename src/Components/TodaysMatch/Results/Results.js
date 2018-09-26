import React from 'react';

import "./Results.css";

const Results = (props) => {
    var results = props.teamNameList.firstTeam_VS_secondTeam || [];
    // resluts = resluts.slice(0, 1);
    const matchDetailsList = results.map((matchDetails, index) => {
        return (
            <tr key={index}>
                <td>{matchDetails.match_hometeam_name}</td>
                <td>{matchDetails.match_time}</td>
                <td>{matchDetails.match_awayteam_name}</td>
            </tr>
        )
    });

    return (
        <div>
            <div className="boarder">
                <table >
                    <thead>
                        <tr>
                            <th colSpan="3" >Today Match ups</th>
                        </tr>
                    </thead>
                    <tbody className="row-style">
                        {matchDetailsList}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Results;
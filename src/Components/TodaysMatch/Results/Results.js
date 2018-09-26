import React from 'react';

import "./Results.css";

const Results = (props) => {
    var resluts = props.teamNameList || [];
    // resluts = resluts.slice(0, 1);
    const matchDetailsList = resluts.map((matchDetails, index) => {
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
                    <tbody>
                        <tr>
                            <th className="results-row">Today Match ups</th>
                        </tr>
                        {matchDetailsList}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Results;
import React from 'react';

// import "./Results.css";

const Results = (props) => {
    var resluts = props.teamNameList || [];
    // resluts = resluts.slice(0, 1);
    const matchDetailsList = resluts.map((matchDetails, index) => {
        return (
            <div key={index}>

                <tr>
                    <td>{matchDetails.match_hometeam_name}</td>
                    <td>{matchDetails.match_time}</td>
                    <td>{matchDetails.match_awayteam_name}</td>
                </tr>

            </div>
        )
    });

    return (
        <div>
            <div className="boarder">

                <table className="results-row">
                    <thead>
                        <tr>
                            <th>Today Match ups</th>
                        </tr>
                    </thead>
                    <tr>
                        {matchDetailsList}
                    </tr>

                </table>
            </div>
        </div >
    )
}

export default Results;
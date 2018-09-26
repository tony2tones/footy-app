import React from 'react';

<<<<<<< HEAD
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
=======
// import "./Results.css";

const Results = (props) => {
    var resluts = props.teamNameList || [];
    resluts = resluts.slice(0, 1);
    const matchDetailsList = resluts.map((matchDetails, index) => {
        return (
            <div key={index}>
                <tr>
                    <td>{matchDetails.match_hometeam_name}</td>
                    <td>{matchDetails.match_time}</td>
                    <td>{matchDetails.match_awayteam_name}</td>
                </tr>
            </div>
>>>>>>> b247a07730bc06ee6a9cce61dce38ef1aa469219
        )
    });

    return (
        <div>
            <div className="boarder">
<<<<<<< HEAD
                <table className="results-row">
                    <tbody>
                        <tr>
                            <th>Today Match ups</th>
                        </tr>
                        {matchDetailsList}
                    </tbody>
=======

                <table className="results-row">
                    <tr>
                        <th>Today Match ups</th>
                    </tr>
                    {/* <tr> */}
                        {matchDetailsList}
                    {/* </tr> */}
>>>>>>> b247a07730bc06ee6a9cce61dce38ef1aa469219
                </table>
            </div>
        </div >
    )
}

export default Results;
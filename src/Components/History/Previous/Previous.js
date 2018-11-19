import React from "react";

<<<<<<< HEAD
import './Previous.css';

const Previous = (props) => {
    var results = props.teamNameList.firstTeam_VS_secondTeam || [];
    // resluts = resluts.slice(0, 1);
    const matchDetailsList = results.map((matchDetails, index) => {
        return (
            <div key={index} className="container">
                <ul>
                    <li>
                        <div>{matchDetails.match_hometeam_name}</div>
                        <div>{matchDetails.match_hometeam_score}</div>
                    </li>
                    VS
                    <li>
                        <div>{matchDetails.match_awayteam_name}</div>
                        <div>{matchDetails.match_awayteam_score}</div>
                    </li>
                </ul>


            </div>
        )
    });
=======
import "./Previous.css";
>>>>>>> 49194880ca54a86f7f10362201eb85a12d6001d9

const Previous = props => {
  var results = props.teamNameList.firstTeam_VS_secondTeam || [];
  
  const matchDetailsList = results.map((matchDetails, index) => {
    return (
      <tr key={index} className="row-style">
        <td>{matchDetails.match_hometeam_name}</td>
        <td>{matchDetails.match_hometeam_score}</td>
        <td>{matchDetails.match_awayteam_name}</td>
        <td>{matchDetails.match_awayteam_score}</td>
      </tr>
    );
  });

  return (
    <div className="boarder">
      <table>
        <tbody>{matchDetailsList}</tbody>
      </table>
    </div>
  );
};

export default Previous;

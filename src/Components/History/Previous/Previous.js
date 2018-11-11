import React from "react";

import "./Previous.css";

const Previous = props => {
  var results = props.teamNameList.firstTeam_VS_secondTeam || [];
  // resluts = resluts.slice(0, 1);
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

import React from 'react';
import "babel-polyfill";

import './PastResults.css';

const PastResults = (props) => {  
    var firstTeamVsSecondTeam = props.teamNameList.firstTeam_VS_secondTeam || [];
        firstTeamVsSecondTeam.map(matchDetails => {
            console.log(matchDetails.match_awayteam_name);
            console.log(matchDetails.match_awayteam_score);
        });
   
    return (
        <div>
            </div>
        // <div className="container">
        //     {data.map(function (d, index) {
        //         return (
        //             <div>
        //                 <li key={index}>{d.data[0].title}</li>
        //                 <li key={index}>{d.data[0].description}</li>
        //                 <li key={index}>{d.data[0].date_created}</li>
        //                 <li key={index}>{d.data[0].keywords}</li>
        //                 <br />
        //             </div>
        //         )
        //     })}
        // </div>
    )
}

export default PastResults;


import React from 'react';

import './PastResults.css';

PastResults = (props) => {
    const teamNames = props.response;
    const teamScore = teamNames.map((teamName) => {
        <li>{teamName}</li>
    });
    return (
        <ul>{teamScore}</ul>
    )
}


// <div>
//     if(prop.TeamHomeTitle){
//         <thead>        
//         <tr>
//             <th colspan="2">{props.TeamHomeTitle}</th>
//             <th colspan="2">{props.TeamAwayTitle}</th>
//         </tr>
//         </thead>
//     }else{
//     <div>{props.teamHome}</div>
//     <div>{props.scoreAway}</div>
//     }
// </div>
export default PastResults;
import React from 'react';

import './PastResults.css';

const PastResults = (props) => {
    return (
        <div>
            <div>
                <div>{props.score}</div>
            </div>
        </div>
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
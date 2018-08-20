import React from 'react';

import './PastResults.css';

const PastResults = (props) => {
    // const teamScores = props.map((teamScore)=> {
    { console.log('ole ', props.score, ' ') }
    // })
    return (
        <div className="container">
            {props.score.firstTeam_VS_secondTeam.map(function (d, index) {
                return (
                    <div>
                        <li key={index}>{d.data[0].title}</li>
                        <li key={index}>{d.data[0].description}</li>
                        <li key={index}>{d.data[0].date_created}</li>
                        <li key={index}>{d.data[0].keywords}</li>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default PastResults;


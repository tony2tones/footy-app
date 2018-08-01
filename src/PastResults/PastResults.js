import React from 'react';

const PastResults = (props) => {
    return (
        <div>
            <p>{props.home} {props.teamAScore}</p>
            <p>{props.away} {props.teamBScore}</p>
        </div>
    )
}

export default PastResults;
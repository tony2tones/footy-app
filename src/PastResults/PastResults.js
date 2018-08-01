import React from 'react';

const PastResults = (props) => {
    return (
        <div>
            <p>{props.home}</p>
            <p>{props.away} {props.awayGoals}</p>
        </div>
    )
}

export default PastResults;
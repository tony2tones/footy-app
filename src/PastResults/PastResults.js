import React from 'react';

import './PastResults.css';

const PastResults = (props) => {
    return (
        <div>
            <div>
                {props.homeTeam}
            </div>
            <div>
                {props.awayTeam}
            </div>
        </div>
    )
}

export default PastResults;
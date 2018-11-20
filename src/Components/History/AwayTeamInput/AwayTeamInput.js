import React from 'react';

const AwayTeamInput = (props) => {
    return <input type="text" onChange={props.changed} value={props.AwayTeam}/>;
};

export default AwayTeamInput;


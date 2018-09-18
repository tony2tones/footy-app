import React from 'react';

const AwayTeamInput = (props) => {
    return <input type="text" onChange={props.onChanged} value={props.awayTeam}/>;
};

export default AwayTeamInput;
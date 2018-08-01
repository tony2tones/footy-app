import React from 'react';

const HomeTeamInput = (props) => {
    return <input type="text" onChange={props.changed} value={props.homeTeam}/>;
};

export default HomeTeamInput;
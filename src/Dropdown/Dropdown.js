import React from 'react';

import './Dropdown.css';

const Dropdown = (props) => {
    var firstTeamVsSecondTeam = props.teamNameList.firstTeam_VS_secondTeam || [];
    const matchDate = firstTeamVsSecondTeam.map(matchDetails => {
        return (
            <div>
                <div  className="padding" >{matchDetails.match_date}</div>
            </div>
        )
    });
    return (
        <div>
            <h2> Date</h2>
            <div>{matchDate}</div>
        </div>
    )
}

export default Dropdown;
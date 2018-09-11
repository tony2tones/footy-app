import React from 'react';

import HomeTeamInput from './HomeTeamInput/HomeTeamInput';
import AwayTeamInput from './AwayTeamInput/AwayTeamInput';
import AwayTeam from './AwayTeam/AwayTeam';
import HomeTeam from './HomeTeam/HomeTeam';
import Date from './Date/Date';

const History = () => {

    return(
        <div>
            <HomeTeamInput />
            <AwayTeamInput />
            <AwayTeam />
            <HomeTeam />
            <Date />
        </div>
    )
}

export default History;
import React from "react";

import HomeTeamInput from './HomeTeamInput/HomeTeamInput';
import AwayTeamInput from './AwayTeamInput/AwayTeamInput';
import AwayTeam from './AwayTeam/AwayTeam';
import HomeTeam from './HomeTeam/HomeTeam';
import Date from './Date/Date';

const History = (props) => {
    return (
        <div className="width">
            <h2>Footy App!</h2>
            <div className="container">
                <HomeTeamInput changed={props.homeTeamChange.bind(this)} homeTeam={props.teamA} />
                <AwayTeamInput changed={props.AwayTeamChange.bind(this)} awayTeam={props.teamB} />
                <button className="buttonStyle" onClick={() => this.props.hToH(props.state.teamA, props.state.teamB)}>Search Past Results</button>
            </div>
            <div className="panel">
                <div className="container">
                    {/* {/* <Date
                        teamNameList={props.response}
                    /> */}
                    {/* <AwayTeam
                        teamNameList={props.response}
                    /> */}
                    {/*
                    <HomeTeam
                        teamNameList={props.response}
                    /> */}
                </div>
                }
            </div>
        </div>
    )
}

export default History;
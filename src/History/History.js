import React from "react";
import ReactDOM from "react-dom";

const History = (props) => {
    return (
        <div className="width">
            <h2>Footy App!</h2>
            <div className="container">
                <HomeTeamInput changed={this.props.homeTeamChange.bind(this)} homeTeam={this.props.state.teamA} />
                <AwayTeamInput changed={this.props.AwayTeamChange.bind(this)} awayTeam={this.props.state.teamB} />
                <button className="buttonStyle" onClick={() => props.hToH(this.props.state.teamA, this.props.state.teamB)}>Search Past Results</button>
            </div>
            <div className="panel">
                <div className="container">
                    <Date
                        teamNameList={this.state.response}
                    />
                    <AwayTeam
                        teamNameList={this.state.response}
                    />
                    <HomeTeam
                        teamNameList={this.state.response}
                    />
                </div>
                }
            </div>
        </div>
    )
}

export default History;
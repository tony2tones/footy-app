import React, { Component } from "react";
import axios from "axios";

import AwayTeamInput from "./AwayTeamInput/AwayTeamInput";
import HomeTeamInput from "./HomeTeamInput/HomeTeamInput";
import Previous from "./Previous/Previous";

import "./history.css";

// Constant variables
const apiKEY =
  "a04860c9a603472bf0254b397f68fa5db177a1cd6b00e11707023603a957d89f";
const baseUrl = "https://apifootball.com/api/?action=";

class History extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        isLoading: false,
        showResults: false,
        teamA: "",
        teamB: "",
        response: ""
      };
      this.homeTeamChange = this.homeTeamChange.bind(this);
      this.AwayTeamChange = this.AwayTeamChange.bind(this);
    }
  }
  homeTeamChange = event => {
    this.setState({
      teamA: event.target.value
    });
  };
  AwayTeamChange = event => {
    this.setState({
      teamB: event.target.value
    });
  };
  componentDidMount() {
    // if (this.state.teamA != null) {
    //     this.headToHead(this.state.teamA, this.state.teamB);
    // } else {
    //     console.log('this has failed');
    // }
  }
  headToHead(teamB, teamA) {
    this.setState({ isLoading: true , showResults: false});
    axios
      .get(
        `${baseUrl}get_H2H&firstTeam=${teamA}&secondTeam=${teamB}&APIkey=${apiKEY}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          response: res.data,
          isLoading: false,
          showResults: true
        });
      })
      .catch(() => {
        // will handel this later
      });
  }
  render() {
    const { isLoading, showResults } = this.state;

    return (
      <div>
        <div className="wrapper">
          <div>
            <HomeTeamInput
              changed={this.homeTeamChange}
              HomeTeam={this.state.teamA}
            />
            <AwayTeamInput
              changed={this.AwayTeamChange}
              AwayTeam={this.state.teamB}
            />
            <button
              onClick={() => {
                this.headToHead(this.state.teamA, this.state.teamB);
              }}
            >
              Past results{" "}
            </button>
          </div>
          {isLoading && 
            <div className="loader" >
              its loading...
            </div>
          }
          {showResults && <Previous teamNameList={this.state.response} />}
        </div>
      </div>
    );
  }
}

export default History;

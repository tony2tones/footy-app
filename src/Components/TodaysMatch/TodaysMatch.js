import React, { Component } from "react";
import axios from "axios";

import Results from "./Results/Results";

var dates = "";
// Constant variables
const apiKEY = "a04860c9a603472bf0254b397f68fa5db177a1cd6b00e11707023603a957d89f";
const baseUrl = "https://apifootball.com/api/?action=";

class TodaysMatch extends Component {

    constructor(props) {
        super(props); {
            this.state = {
                dateFrom: '',
                dateTo: '',
                response: '',
            };
            this.todaysMatch = this.todaysMatch.bind(this);
        }
    }

  componentDidMount() {
    this.getTodaysDate();
  }

  getTodaysDate() {
    var d = new Date(),
      month = "-" + (d.getMonth() + 1),
      day = "-" + d.getDate(),
      year = +d.getFullYear();
    var date = year + month + day;
    this.todaysMatch(date);
  }

  todaysMatch(date) {
    axios
      .get(
        `${baseUrl}get_events&from=${date}&to=${date}&league_id=62&APIkey=${apiKEY}`
      )
      .then(res => {
        this.setState({
          response: res.data,
          isLoading: false,
          showResults: true
        });
        // console.log(res.data[0].match_awayteam_name);
      })
      .catch(() => {
        // this.setState({})
        console.log("it didnt work");
        // will handel this later
      });
  }

  render() {
    const { isLoading, showResults } = this.props;
    let noResults = null;
    if(!showResults) {
      noResults = <div> no results </div> 
    }

    return (
      <div >
        {!showResults && <div className="container"> No Premier League games for today</div>}
        {isLoading && <div> Loading ... </div>}
        {showResults && (
          <div>
            <Results teamNameList={this.state.response} />
          </div>
        )}
      </div>
    );
  }
}

export default TodaysMatch;

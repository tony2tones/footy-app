import React, { Component } from "react";
import axios from "axios";

import Results from "./Results/Results";

var dates="";
// Constant variables
const apiKEY =
  "a04860c9a603472bf0254b397f68fa5db177a1cd6b00e11707023603a957d89f";
const baseUrl = "https://apifootball.com/api/?action=";

class TodaysMatch extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        dateFrom: '',
        dateTo: '2018-11-04',
        response: ''
      };
    }
  }

  componentDidMount() {
    this.getTodaysDate();
    if(this.state.dateTo != null){
        dates = this.state.dateTo;
        this.todaysMatch(dates);
    }
    // this.todaysMatch();
  }

  getTodaysDate() {
    var d = new Date(),
      month = "-" + (d.getMonth() + 1),
      day = "-" + d.getDate(),
      year = + d.getFullYear();
     var date = year + month + day;
     this.setState({
         dateTo : date
  });
  this.todaysMatch(this.state.dateTo);
}

  todaysMatch(date) {
    axios
      .get(
        `${baseUrl}get_events&from=2018-11-4&to=${date}&league_id=62&APIkey=${apiKEY}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          response: res.data
          // isLoading: false,
          // showResults: true
        });
        // console.log(res.data[0].match_awayteam_name);
      })
      .catch(() => {
        console.log("it didnt work");
        // will handel this later
      });
  }

  render() {
    return (
      <div>
        <Results teamNameList={this.state.response} />
        <a>{this.state.dateTo}</a>
      </div>
    );
  }
}

export default TodaysMatch;

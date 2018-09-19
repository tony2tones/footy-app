import React, { Component } from "react";
import axios from 'axios';

// Constant variables
const apiKEY = 'a04860c9a603472bf0254b397f68fa5db177a1cd6b00e11707023603a957d89f';
const baseUrl = 'https://apifootball.com/api/?action=';
// const resutsUrl = 'https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01';

class TodaysMatch extends Component {

    constructor(props) {
        super(props);{
            this.state = {
                dateFrom : '',
                dateTo : '',
            }
        }
    }


    headToHead(teamB, teamA) {
        axios.get(`https://apifootball.com/api/?action=get_H2H&firstTeam=${teamA}&secondTeam=${teamB}&APIkey=${apiKEY}`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    response: res.data,
                    // isLoading: false,
                    // showResults: true
                });
            })
            .catch(() => {
                // will handel this later
            });
    };

    render() {
        return (
            <div>
                <p>todays game</p>
            </div>
        )
    }
}

export default TodaysMatch;
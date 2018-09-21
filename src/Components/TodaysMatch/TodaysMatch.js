import React, { Component } from "react";
import axios from 'axios';

import HomeTeam from './HomeTeam/HomeTeam';

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

    componentDidMount() {
        this.todaysMatch();
        
    }


    todaysMatch() {
        axios.get(`${baseUrl}get_events&from=2018-09-22&to=2018-09-22&league_id=62&APIkey=${apiKEY}`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    response: res.data,
                    // isLoading: false,
                    // showResults: true
                });
                console.log(res.data[0].match_awayteam_name);
            })
            .catch(() => {
                // will handel this later
            });
    };

    render() {
        return (
            <div>
                <HomeTeam 
                />
                <p>todays game {this.state.dateFrom}</p>
            </div>
        )
    }
}

export default TodaysMatch;
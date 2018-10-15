import React, { Component } from "react";
import axios from 'axios';

import Results from './Results/Results';

// Constant variables
const apiKEY = 'a04860c9a603472bf0254b397f68fa5db177a1cd6b00e11707023603a957d89f';
const baseUrl = 'https://apifootball.com/api/?action=';

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
        if (this.state.dateFrom != '') {
            var now = new Date();
            var year = now.getFullYear().toString();
            var m = (now.getMonth() + 1).toString();
            var d = now.getDate().toString();
            var month = m < 10 ? '0' + m : m;
            var day = d < 10 ? '0' + d : d;
            var date = year + '-' + month + '-' + d;
            console.log(date, '', now);
            this.setState({
                dateFrom: date
            });
            this.todaysMatch(this.state.dateFrom);
        }
        
    }

    todaysMatch(date) {
        axios.get(`${baseUrl}get_events&from=${date}&to=${date}&league_id=62&APIkey=${apiKEY}`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    response: res.data,
                    // isLoading: false,
                    // showResults: true
                });
            })
            .catch(() => {
                console.log('it didnt work or there are just simply no games');

                // will handel this later
            });
    };

    render() {
        return (
            <div>
                <Results
                    teamNameList={this.state.response}
                />
            </div>
        )
    }
}

export default TodaysMatch;
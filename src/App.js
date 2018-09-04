import React, { Component } from "react";
import ReactDOM from "react-dom";
import request from "superagent";


import HomeTeamInput from './HomeTeamInput/HomeTeamInput';
import AwayTeamInput from './AwayTeamInput/AwayTeamInput';
import AwayTeam from './AwayTeam/AwayTeam';
import HomeTeam from './HomeTeam/HomeTeam';
import Date from './Date/Date';

import './App.css';

// Constant variables
const apiKEY = 'a04860c9a603472bf0254b397f68fa5db177a1cd6b00e11707023603a957d89f';
const baseUrl = 'https://apifootball.com/api/?action=';
const resutsUrl = 'https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01';

class App extends Component {
    static headToHead(teamA, teamB) {
        return `${baseUrl}get_H2H&firstTeam=${teamA}&firstTeam=${teamB}&APIkey=${apiKEY}`;
    }
    constructor(props) {
        super(props); {
            this.state = {
                isLoading: true,
                showResults: false,
                teamA: 'Chelsea',
                teamB: 'Liverpool',
                response: '',
                listOpen: false,
                headerName: this.props.name,
                team: [
                    {
                        id: 0,
                        name: 'Chelsea',
                        selected: false,
                        key: 'location'
                    },
                    {
                        id: 1,
                        name: 'Liverpool',
                        selected: false,
                        key: 'location'
                    },
                    {
                        id: 2,
                        name: 'Watford',
                        selected: false,
                        key: 'location'
                    },
                    {
                        id: 3,
                        name: 'Newcastle',
                        selected: false,
                        key: 'location'
                    },
                    {
                        id: 4,
                        name: 'Manchester City',
                        selected: false,
                        key: 'location'
                    },
                    {
                        id: 5,
                        name: 'Manchester United',
                        selected: false,
                        key: 'location'
                    }
                ]
            }
        }
    }

    homeTeamChange = (event) => {
        this.setState({
            teamA: event.target.value
        });
    }
    AwayTeamChange = (event) => {
        this.setState({
            teamB: event.target.value
        });
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    componentDidMount() {

        if (this.state.teamA != null) {
            this.hToH(this.state.teamA, this.state.teamB);
        } else {
            console.log('this has failed');
        }
    }

    hToH(teamB, teamA) {
        
        request
            .get(`https://apifootball.com/api/?action=get_H2H&firstTeam=${teamA}&secondTeam=${teamB}&APIkey=${apiKEY}`)
            .set('accept', 'json')
            .then((res) => {
                console.log(res.body);
                this.setState({
                    response: res.body,
                    isLoading: false,
                    showResults: true
                });

            })
            .catch(() => {

                // will handel this later
            });
    };

    //https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=62&APIkey=xxxxxxxxxxxxxx

    render() {
        const {
            isLoading,
            showResults
        } = this.state;

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/history">Previous Games</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
            </div >
        );
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
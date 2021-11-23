/*import React from 'react'
import axios from 'axios'


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': '744989c25amsh1bcd9639b8a662cp14a242jsneff4a277f4ea'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.data.coins);
        }).catch(function (error) {
            console.error(error);
        });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading currencies...</div>
        }

        return (
            <div className = 'MainDashboard'>
                Dashboard goes here
            </div>
        )
    }
}

export default Dashboard;
*/
import React from 'react'
import request from 'request';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {

        const rp = require('request-promise');
        const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
            'start': '1',
            'limit': '5000',
            'convert': 'USD'
        },
        headers: {
            'X-CMC_PRO_API_KEY': 'fec80d9c-4bc0-4a57-8d15-4df70cbe9ea9'
        },
        json: true,
        gzip: true
        };

        rp(requestOptions).then(response => {
        console.log('API call response:', response);
        }).catch((err) => {
        console.log('API call error:', err.message);
        });
      
    }

    render() {
        return (
            <div className = 'MainDashboard'>
                Dashboard goes here
            </div>
        )
    }
}

export default Dashboard;
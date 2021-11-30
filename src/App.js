import { render } from '@testing-library/react';
import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard';
import Topbar from './Components/Topbar/Topbar';
import "./app.css"
import Converter from './Components/Converter/Converter';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            filterOnApi: this.props.filterOnApi,
            filterOn: ""
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

        axios.request(options).then((response) => {
            console.log(response.data.data.coins);
            console.log(this.state.filterOnApi)
            this.setState({
                items: response.data.data.coins,
                isLoaded: true
            })
        }).catch(function (error) {
            console.log(error);
        });
    }


    render() {
        var { filterOn } = this.state;
        var { isLoaded, items } = this.state;

        return(
            <div>
                <Topbar/>
                <Router>
                    <ul class="NavigationBar">
                        <li class="IndividualNav"><Link to="/">Dashboard</Link></li>
                        <li class="IndividualNav"><Link to="/cryptoconverter">Crypto-Converter</Link></li>
                    </ul>
                    <Routes>
                        <Route exact path='/' element={<Dashboard filterOn={this.state.filterOn}/>} />
                        <Route exact path='/cryptoconverter' element={<Converter coins = {items}></Converter>} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App

/*const App = () => {

    return (
        <div>
            <Topbar/>
            <h1>Crypto Dashboard</h1>
            <Dashboard/>
        </div>
    );
}

export default App*/

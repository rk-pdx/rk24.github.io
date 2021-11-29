import { render } from '@testing-library/react';
import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard';
import Topbar from './Components/Topbar/Topbar';
import "./app.css"
import Converter from './Components/Converter/Converter';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            filterOnApi: this.props.filterOnApi,
            filterOn: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

        

    handleChange(event) {
        this.setState({filterOn: event.target.value});
        console.log(this.state.filterOn);
    }

    handleSubmit(event) {
        console.log("Submitted")
        event.preventDefault();
    }

    render() {
        var { filterOn } = this.state;
        var { isLoaded, items } = this.state;

        return(
            <div>
                <Topbar/>
               
                <h1>Dashboard</h1>
                <form  className="SearchForm" onSubmit={this.handleSubmit}>
                    <input className= "searchBar" type="text" placeholder="Search" onChange={this.handleChange}></input>
                    <button type="submit">Search</button>
                </form>
                <Converter coins = {items}></Converter>
                <Dashboard filterOn={this.state.filterOn}/>
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

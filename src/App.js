import { render } from '@testing-library/react';
import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard';
import Topbar from './Components/Topbar/Topbar';
import "./app.css"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           items: [],
           filterOn: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        return(
            <div>
                <Topbar/>
                <h1>Dashboard</h1>
                <form  className="SearchForm" onSubmit={this.handleSubmit}>
                    <input className= "searchBar" type="text" placeholder="Search" onChange={this.handleChange}></input>
                    <button type="submit">Search</button>
                </form>
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

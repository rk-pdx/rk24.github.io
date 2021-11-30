import React from 'react'
import CurrencyTable from '../CurrencyTable/CurrencyTable';
import "./dashboard.css"


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            filterOn: this.props.filterOn,
            userInput: "",
            searchInput: ""
        }

        this.handleChange = this.handleChange.bind(this)
        //this.handleSubmit = this.handleSubmit.bind(this)
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
            console.log(this.state.filterOn)
            this.setState({
                items: response.data.data.coins,
                isLoaded: true
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleChange(event) {
        this.setState({userInput: event.target.value});
        //console.log(this.state.userInput);
    }

    

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading currencies...</div>
        }
        else {
            console.log(this.state.userInput)
            return (
                <div className = "MainDashboard">
                     <form  className="SearchForm" onSubmit={this.handleSubmit}>
                        <input className= "searchBar" type="text" placeholder="FILTER BY CURRENCY..." onChange={this.handleChange}></input>
                       
                    </form>
                    <div className = "Container">
                        <CurrencyTable coinArray = {items} filterOn = {this.state.userInput}/>
                    </div>
                </div>
            )
        }
    }
}
/*<div className = "MainDashboard">
                    <div className = "Container">
                        {items.map(item => (
                            <div key={item.id} className="Currency">
                                <Coin rank = {item.rank} name = {item.name} price = {item.price}/>
                            </div>
                        ))}
                    </div>
                </div>*/

export default Dashboard;

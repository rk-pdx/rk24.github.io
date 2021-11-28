import React from 'react'
import CurrencyTable from '../CurrencyTable/CurrencyTable';
import "./dashboard.css"


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            filterOn: this.props.filterOn
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
            console.log(this.state.filterOn)
            this.setState({
                items: response.data.data.coins,
                isLoaded: true
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading currencies...</div>
        }
        else {
            return (
                <div className = "MainDashboard">
                     <form  className="SearchForm" onSubmit={this.handleSubmit}>
                        <input className= "searchBar" type="text" placeholder="Search" onChange={this.handleChange}></input>
                        <button type="submit">Search</button>
                    </form>
                    <div className = "Container">
                        <CurrencyTable coinArray = {items}/>
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

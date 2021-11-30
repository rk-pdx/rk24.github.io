import React from 'react'
import CoinData from '../CoinData';
import { List } from 'semantic-ui-react';


class Bitcoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            item: []
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
            for (let i = 0; i < response.data.data.coins.length; i++) {
                if (response.data.data.coins[i].name == this.state.name) {
                    this.setState({
                        item: response.data.data.coins[i]
                    })
                }
            }
            console.log(this.state.item)
           
        }).catch(function (error) {
            console.log(error);
        });
    }

    render () {
        return (
            <div>
                <List>
                    <List.Item>Rank: {this.state.item.rank}</List.Item>
                    <List.Item>Name: {this.state.item.name}</List.Item>
                    <List.Item>Price: {this.state.item.price}</List.Item>
                    <List.Item>Circulating Supply: {this.state.item.circulatingSupply}</List.Item>
                    <List.Item>Symbol: {this.state.item.symbol}</List.Item>
                    <List.Item>Number of Exchanges: {this.state.item.numberOfExchanges}</List.Item>
                    <List.Item>Number of Markets: {this.state.item.numberOfMarkets}</List.Item>
                    <List.Item>Slug: {this.state.item.slug}</List.Item>
                    <List.Item>UUID: {this.state.item.uuid}</List.Item>
                    <List.Item>URL: {this.state.item.websiteUrl}</List.Item>
                </List>
            </div>
        );
    }
}
export default Bitcoin

import React from 'react';
import { List } from 'semantic-ui-react';


/*function CoinData({ data }) {
    return (
        <table className="Data">
           <tr>
                <th>
                    Rank
                </th>
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
            </tr>
            <Coin coin = {data} rank = {data.rank} name = {data.name} price = {data.price}/>
       </table>
    )
}
*/

function CoinData({ data }) {
    return (
        <table className="Data">
            <List>
                <List.Item>Rank: {data.rank}</List.Item>
                <List.Item>Name: {data.name}</List.Item>
                <List.Item>Price: {data.price}</List.Item>
                <List.Item>Circulating Supply: {data.circulatingSupply}</List.Item>
                <List.Item>Symbol: {data.symbol}</List.Item>
                <List.Item>Number of Exchanges: {data.numberOfExchanges}</List.Item>
                <List.Item>Number of Markets: {data.numberOfMarkets}</List.Item>
                <List.Item>Slug: {data.slug}</List.Item>
                <List.Item>UUID: {data.uuid}</List.Item>
                <List.Item>URL: {data.websiteUrl}</List.Item>
            </List>
       </table>
    )
}
export default CoinData

/*
ORIGINAL RETURN CONTENTS

<table className="Table">
           <tr>
                <th>
                    Rank
                    {data.name}
                    
                </th>
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
                <th>
                    Description
                </th>
                <th>
                    Circulating Supply
                </th>
                <th>
                    Symbol
                </th>
                <th>
                    Number of Exchanges
                </th>
                <th>
                    Number of Markets
                </th>
                <th>
                    Slug
                </th>
                <th>
                    UUID
                </th>
                <th>
                    WebsiteURL
                </th>
            </tr>
            
            COINDATA:
           
       </table>
*/
/*
import React from 'react'

function CurrencyTable({ coinData }) {
    return (
       <table className="Table">
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
            {coinData.map(item => (
                <div key={item.id} className="Row">
                        <Coin rank = {item.rank} name = {item.name} price = {item.price} description = {item.description} circulatingSupply = {item.circulatingSupply} symbol = {item.symbol} numberOfExchanges = {item.numberOfExchanges} numberOfMarkets = {item.numberOfMarkets} slug = {item.slug} uuid = {item.uuid} websiteUrl = {item.websiteUrl} />
                </div>
            ))}
       </table>
    )
}

export default CurrencyTable
*/
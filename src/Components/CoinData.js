
import React from 'react'


function CoinData({ data }) {
    console.log(data.name)
    return (
       <table className="Table">
           <tr>
                <th>
                    Rank
                    {data.rank}
                </th>
                <th>
                    Name
                    {data.name}
                </th>
                <th>
                    Price
                    {data.price}
                </th>
                <th>
                    Circulating Supply
                    {data.circulatingSupply}
                </th>
                <th>
                    Symbol
                    {data.symbol}
                </th>
                <th>
                    Number of Exchanges
                    {data.numberOfExchanges}
                </th>
                <th>
                    Number of Markets
                    {data.numberOfMarkets}
                </th>
                <th>
                    Slug
                    {data.slug}
                </th>
                <th>
                    UUID
                    {data.uuid}
                </th>
                <th>
                    WebsiteURL
                    {data.websiteUrl}
                </th>
            </tr>
           
       </table>
    )
}

export default CoinData

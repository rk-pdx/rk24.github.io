
import React from 'react';
import Coin from './Coin/SecondModalCoin';


function CoinData({ data }) {
    console.log(data.name)
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
            </tr>
            <Coin coin = {data} rank = {data.rank} name = {data.name} price = {data.price}/>
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
import React from 'react'
import Coin from '../Coin/Coin';
import "./currencyTable.css"

function CurrencyTable({ coinArray, filterOn }) {
    for (let i = 0; i < coinArray.length; i++) {
        if (filterOn == coinArray[i].name) {
            let filteredCoin = coinArray[i];
            return (
                <div>
                    <Coin coin = {filteredCoin} rank = {filteredCoin.rank} name = {filteredCoin.name} price = {filteredCoin.price}/>
                </div>
            );
        }  
    }

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
            {coinArray.map(item => (
                <div key={item.id} className="Row">
                        <Coin coin = {item} rank = {item.rank} name = {item.name} price = {item.price}/>
                </div>
            ))} 
       </table>
    )
}

export default CurrencyTable
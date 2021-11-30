import React from 'react'
import Coin from '../Coin/Coin';
import "./currencyTable.css"

function CurrencyTable({ coinArray, filterOn }) {
    //Filtering mechanism:
    for (let i = 0; i < coinArray.length; i++) {
        if (filterOn.toLowerCase() == coinArray[i].name.toLowerCase()) {
            let filteredCoin = coinArray[i];
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
                    info
                </th>
              </tr>
                <div>
                    <Coin coin = {filteredCoin} rank = {filteredCoin.rank} name = {filteredCoin.name} price = {filteredCoin.price}/>
                </div>
       </table>
               
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
                <th>
                <div className="buttonContainer">
                    <button id="change" class="infoButton" >Info</button>
            </div>
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
import React from 'react'
import "./coin.css"

function Coin({ rank, name, price }) {
    return (
        <tr>
            <td>
                {rank}
            </td>
            <td>
                {name}
            </td>
            <td>
                {price}
            </td>
        </tr>
        /*<table>
            <tr>
                <td>
                    {rank}
                </td>
                <td>
                    {name}
                </td>
                <td>
                    {price}
                </td>
            </tr>
        </table>*/
        /*<div className="ListItem">
            <div className="Rank"> {rank} </div>
            <div className="HeaderTag">Currency</div>
            <div className="Name"> {name} </div>
            <div className="Price"> Price: {price} </div>
            <button type="button">Click me</button>
        </div>*/
    )
}

export default Coin
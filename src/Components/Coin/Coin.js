import React from 'react'
import "./coin.css"
import ModalOut from "./ModalOut.js"

function Coin({ name, price }) {
    return (
        <div className="Card">
            <div className="Rank">1</div>
            <div className="HeaderTag">Currency</div>
            <div className="Name"> {name} </div>
            <div className="CoinStats">
                <div className="Stat">
                    <div className="Price"> Price: {price} </div>
                </div>
                    <div className="Stat"> 
                    
                </div>
            </div>
            <ModalOut/>
        </div>
    )
}

export default Coin
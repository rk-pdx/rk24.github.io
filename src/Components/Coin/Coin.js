import React from 'react'

function Coin({ name, price }) {
    return (
        <div className="Container">
            <div className="Name"> {name} </div>
            <div className="Price"> {price} </div>
        </div>
    )
}

export default Coin
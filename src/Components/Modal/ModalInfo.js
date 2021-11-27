import React from 'react'

export default function ModalInfo({coin}) {
    return (
        <div>
            <h2>Testing data</h2>
            <div>
                <div> Price Change: {coin.change}%</div>
                <div> Circulating Supply: {coin.circulatingSupply}</div>
            </div>

            <div>About
                {coin.description}
            </div>
            
            
        </div>
    )
}

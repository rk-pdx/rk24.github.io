import React from 'react'

export default function ModalInfo({coin}) {
    return (
        <div>
            <h2>About...</h2>
            
            <div>
                <div> Price Change 24hr: {coin.change}%</div>
                <div> Circulating Supply: {coin.circulatingSupply}</div>
            </div>

            
            
        </div>
    )
}

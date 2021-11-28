import React from 'react'
import "./modalInfo.css"

export default function ModalInfo({coin}) {
    return (
        <div className="coinInfo">
            <div>
                <div className="coinPriceChange">
                    <div id="priceChange">Price Change 24hr:</div>
                    <div id="priceChangeNumber"> {coin.change}%</div>
                </div>
            </div>
            <div className="coinCirculatingSupply">
                    <div id="circulatingSupply">Circulating Supply:</div>
                    <div id="circulatingSupplyNumber"> {coin.circulatingSupply}</div>
            </div>
        </div>
    )
}

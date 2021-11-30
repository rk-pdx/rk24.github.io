import React from 'react'
import "./converter.css"


export default class Converter extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            fromValue: '',
            toValue: '',
            amountValue: ''
        }

        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
    }

    handleFromChange(event) {
        this.setState({
            fromValue: event.target.value
    })}

    handleAmount(event) {
        this.setState({
            amountValue: event.target.value
        })
    }

    handleToChange(event) {
        this.setState({
            toValue: event.target.value});
    }

    handleSubmit(event) {
        this.setState({
            fromValue: event.target.value 
        })
    }

    convert(coins) {
       // console.log(coins[0].symbol)
        console.log(this.state.fromValue)
        let fromCoin = this.state.fromValue
        let fromPriceUSD = 0
        let toCoin = this.state.toValue
        let toPriceUSD = 0
        
        coins.forEach(function(item, index) {
            //find rate of coins
            //search through array until symbol is found
            //use that index to get dollar amount
            //(input) 60,000usd/1btc (1 eth/5000)

            if(item.symbol === fromCoin) {
                fromPriceUSD = item.price
            }
            if(item.symbol === toCoin) {
                toPriceUSD = item.price
            }
            
        })

       return this.state.amountValue 
       * fromPriceUSD / toPriceUSD
    }

    render() {
    return (
        <form className="convertContainer" onSubmit={this.handleSubmit}>
            <div className="box">
            <div className="fromContainer">
                <label> From</label>
                <div className="converterInput">
                    <select value={this.state.fromValue} onChange={this.handleFromChange}>
                        <option>select</option>
                        {this.props.coins.map(item => (
                        <option>{item.symbol}</option>
                        ))}
                    </select>
                    <input type='text' placeholder="0.00" value={this.state.amountValue} onChange={this.handleAmount}></input>
                </div>
            </div>
            <div id="convertSymbol"> ||</div>
            <div className="toContainer">
                <label> To</label>
                <div className="converterInput">
                    <select value={this.state.toValue} onChange={this.handleToChange}>
                        <option>select</option>
                        {this.props.coins.map(item => (
                        <option>{item.symbol}</option>
                        ))}
                    </select>
                    <input id="convertValue" type='text' placeholder="..." value = {
                        this.convert(this.props.coins)
                        }></input>
                </div>
            </div> 
            </div> 
        </form>
    )
    }
}


/*<input type='text' placeholder="bitcoin" value={this.state.fromValue} onChange={this.handleChange} onSubmit={this.handleSubmit}></input>
                    <input type='text' placeholder="0.00"></input>

*/
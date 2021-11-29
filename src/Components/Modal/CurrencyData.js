import React from "react";
import { Route } from 'react-router-dom'
import "./modal.css";
import LineGraph from "./LineGraph";
import Bitcoin from "../Pages/bitcoin"
import OverallPage from "../Pages/OverallPage"
//IMPORT FROM PAGES
//BITCOIN...
//import Bitcoin from ../Pages/bitcoin
//this.props.coin.name
//<{this.props.coin.name}/>

const components = {
    Bitcoin: Bitcoin,
};

export default class CurrencyData extends React.Component {
    onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

    render() {
    if (!this.props.show) {
        return null;
    }
    console.log(this.props.coin)
    let coin = this.props.coin
    return (
        <div class="modal" id="modal">
            <div class="content">
                <div class="closeContainer">
                    <button class="close" onClick={(e) => { this.onClose(e)}}>X</button>
                </div>
                <div>
                    <OverallPage coin={this.props.coin}/>
                </div>
            </div>
        </div>

    );
  }
}

var modal = document.getElementById("modal");
window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  //<Bitcoin name={this.props.name}/>
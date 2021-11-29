import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "./modal.css";
import CurrencyData from "./CurrencyData";
import ModalInfo from "./ModalInfo";
import LineGraph from "./LineGraph";
import Bitcoin from "../Pages/bitcoin"


export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           linkTo: "",
           show: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showData = e => {
        this.setState({
            show: true
        });
    };

    showDatat = e => {
        this.setState({
            show: !this.state.show
        });
    };

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    };

    handleSubmit(event) {
        console.log("Submitted")
        event.preventDefault();

        //this.setState({linkTo: `../Pages/${this.props.coinName}`});
        //console.log(this.state.linkTo)
        console.log(this.props.coin.name)
        this.setState({ linkTo: `../Pages/${this.props.coin.name}` }, () => {
            console.log(this.state.linkTo)
        }); 
        
    }

    render() {
        var { linkTo } = this.state;

        if (!this.props.show) {
            return null;
        }

        /*return (
            <Router>
                <Link to="../Pages/bitcoin.js">About</Link>
                <Routes>
                    <Route exact path='../Pages/bitcoin.js' component={Bitcoin} />
                </Routes>
            </Router>
        );*/

        /*if (linkTo != "") {
            console.log("NOT EMPTY")
            return (
                <Router>
                    <Route exact path={linkTo} component={Bitcoin}/>
                </Router>
            );
        } */
       
            console.log(this.props.coin)
            let coin = this.props.coin
            return (
                <div class="modal" id="modal">
                    <div class="content">
                        <div class="closeContainer">
                            <button class="close" onClick={(e) => { this.onClose(e)}}>X</button>
                        </div>
                        <div className="coinHeader">
                            <div className="coinName"> {coin.name}</div>
                            <div className="coinSymbol"> {coin.symbol}</div>
                            <div className="buttonContainer">
                                <button id="change" class="moreInfo" onClick={e => {this.showData();}}>Details</button>
                                <CurrencyData coin = {this.props.coin} onClose={this.showDatat} show={this.state.show} name={this.props.coin.name}/>
                            </div>
                        </div>
                        <div className="coinPriceContainer"> 
                            <div className="coinPrice"> {coin.price}</div>
                            <div className="twentyFour">24hr</div>
                        </div>
                        
                        <LineGraph coin = {this.props.coin}/>
                        <ModalInfo coin = {this.props.coin}/>
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


  /*
  ORIGINAL BUTTON
   <button id="change2" class="Details" onClick={() => { (`../Pages/${this.props.coinName}`) }} >Details</button>

  */
  
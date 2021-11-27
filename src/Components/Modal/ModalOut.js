import React from "react";
import Coin from "../Coin/Coin";
import Modal from "./Modal";
import "./modalOut.css"


class ModalOut extends React.Component {
    state = {
        show: false
    };

    showModal = e => {
        this.setState({
            show: true
        });
    };

    showModalt = e => {
        this.setState({
            show: !this.state.show
        });
    };
  

    render() {
        return (
            <div className="App">
                <button id="change" class="moreInfo" onClick={e => {this.showModal();}}>info</button>
                <Modal coin = {this.props.coin} onClose={this.showModalt} show={this.state.show}/>
            </div>
        )
    }
}
export default ModalOut;

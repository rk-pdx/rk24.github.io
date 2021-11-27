import React from "react";
import "./modal.css";
import ModalInfo from "./ModalInfo";
import LineGraph from "./LineGraph";

export default class Modal extends React.Component {
    onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

    render() {
    if (!this.props.show) {
        return null;
    }
    console.log(this.props.coin)
    return (
        <div class="modal" id="modal">
            <div class="content">
                <div class="closeContainer">
                    <button class="close" onClick={(e) => { this.onClose(e)}}>X</button>
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
  
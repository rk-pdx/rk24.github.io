import React from "react";
import "./modal.css";
import ModalInfo from "./ModalInfo";

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
            <div class="content">{this.props.children}
                <div class="actions">
                    <button class="close" onClick={(e) => { this.onClose(e)}}>X</button>
                </div>
                
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
  
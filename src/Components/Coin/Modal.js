import React from "react";
import "./popup.css";

export default class Modal extends React.Component {
    onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

    render() {
    if (!this.props.show) {
        return null;
    }
    return (
        <div class="modal" id="modal">
            <div class="content">{this.props.children}
                <h2> My Popup Window </h2>
                <div class="actions">
                    <button onClick={(e) => { this.onClose(e)}}>Close</button>
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
  
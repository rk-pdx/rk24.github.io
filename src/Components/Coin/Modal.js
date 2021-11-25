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
        <div class="modal">
            <div class="content">{this.props.children}</div>
            <div class="actions">
                <button onClick={(e) => { this.onClose(e)}}>Close</button>
            </div>
        </div>
    );
  }
}

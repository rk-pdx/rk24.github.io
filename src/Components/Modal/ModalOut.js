import React from "react";
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
                <button class="moreInfo" onClick={e => {this.showModal();}}>Learn More</button>
                <Modal onClose={this.showModalt} show={this.state.show}></Modal>
            </div>
        )
    }
}
export default ModalOut;

import React from "react";
import Modal from "./Modal";


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
                <button onClick={e => {this.showModal();}}>Learn More</button>
                <Modal onClose={this.showModalt} show={this.state.show}></Modal>
            </div>
        )
    }
}
export default ModalOut;

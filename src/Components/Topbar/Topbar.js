import React, { useState } from 'react'
import "./topbar.css"

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({userInput: event.target.value});
        console.log(this.state.userInput);
    }

    render() {
        return (
            <div>
                <div className="topbar">
                    <div className="topbarContainer">
                        <div className="title"> My Dashboard</div>
                            <input className= "searchBar" type="text" placeholder="Search" onChange={this.handleChange}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;

/*export default function Topbar() {
    const [value, setValue] = useState(1);
    return (
        <div className="topbar">
            <div className="topbarContainer">
                <div className="title"> My Dashboard</div>
                <input className= "searchBar" type="text" placeholder="Search"></input>
            </div>
        </div>
    )
}*/

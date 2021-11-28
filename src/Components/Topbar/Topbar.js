import React from 'react'
import { Link } from 'react-router-dom';
import Bitcoin from './bitcoin'
import "./topbar.css"


//This class implements the searching functionality.
class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            items: [],
            linkTo: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': '744989c25amsh1bcd9639b8a662cp14a242jsneff4a277f4ea'
            }
        };

        axios.request(options).then((response) => {
            //console.log(response.data.data.coins);

            this.setState({
                items: response.data.data.coins
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleChange(event) {
        this.setState({userInput: event.target.value});
        console.log(this.state.userInput);
    }

    //Check if the user input matches any currency in call
    handleSubmit(event) {
        console.log("Submitted")
        event.preventDefault();

        for (let i = 0; i < this.state.items.length; i++) {
            if (this.state.userInput == this.state.items[i].name) {
                console.log("match")
                let tempStr = `/${this.state.userInput}`
                this.setState({
                    linkTo: tempStr 
                })
            } 
        }
    }

    render() {
        var { linkTo } = this.state;
        
        return (
            <div>
                <div className="topbar">
                    <div className="topbarContainer">
                        <div className="title"> Cryptocurrency Site</div>
                           
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;

/*
ORIGINAL CODE: REMOVED SEARCH BAR
 <form onSubmit={this.handleSubmit}>
    <input className= "searchBar" type="text" placeholder="Search" onChange={this.handleChange}></input>
    <button type="submit">Search</button>
</form>
*/

//BEN's ORIGINAL CODE
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

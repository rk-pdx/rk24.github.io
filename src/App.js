import { render } from '@testing-library/react';
import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard';
import Topbar from './Components/Topbar/Topbar';
import "./app.css"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           items: []
        }   
    }

    render() {
        return(
            <div>
                <Topbar/>
                <h1>Dashboard</h1>
                <Dashboard/>
            </div>
        );
    }
}

export default App

/*const App = () => {

    return (
        <div>
            <Topbar/>
            <h1>Crypto Dashboard</h1>
            <Dashboard/>
        </div>
    );
}

export default App*/

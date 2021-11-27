import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard';
import Topbar from './Components/Topbar/Topbar';
import { Router, Link, Route } from 'react-router';


const App = () => {

    return (
        <div>
            <Topbar/>
            <h1>Crypto Dashboard</h1>
            <Dashboard/>
        </div>
    );
}

export default App

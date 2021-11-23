import React from 'react'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarContainer">
                <div className="title"> My Dashboard</div>
                <input className= "searchBar" type="text" placeholder="Search"></input>
            </div>
        </div>
    )
}

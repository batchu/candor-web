import React from 'react'
import Issue from './Issue'

class Dashboard extends React.Component{
    render(){
        return <div>
            <h1>Dashboard</h1>
            <button type={Image} className="settingsIcon">
            <img src="https://img.icons8.com/fluent-systems-filled/24/000000/settings.png"/>
            </button>
            <h3>No issues to display!</h3>
            <button type={Image} className="newIssue">
            <img src="https://img.icons8.com/pastel-glyph/64/000000/plus--v1.png"/>
            </button>
        </div> 
    }
}
export default Dashboard


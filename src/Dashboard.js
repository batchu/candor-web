import React from 'react'
import Issue from './Issue'

class Dashboard extends React.Component{
    render(){
        return <div>
            <h1>Dashboard</h1>
            <button className="settingsIcon">
             <span className="glyphicon glyphicon-cog"></span>    
            </button>
            <h3>No issues to display!</h3>
            <button className="newIssue">
             <span className="glyphicon glyphicon-plus-sign"></span>    
            </button>
        </div> 
    }
}
export default Dashboard


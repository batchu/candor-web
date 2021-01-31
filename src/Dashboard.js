import React from 'react'
import Issue from './Issue'
import IssueList from './IssueList'
import Button from 'react-bootstrap/Button';

class Dashboard extends React.Component{
    render(){
        return <div className="dashboard-wrapper">
            <h1>Dashboard</h1>
            <IssueList />
            <Button  className="glyphicon glyphicon-circle-empty-plus newIssue" />
           
        
        </div> 
    }
}
export default Dashboard


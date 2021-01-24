import React, { Component } from 'react'
import Issue from './Issue'

class IssueList extends React.Component {
    render() {
        return <div>
            <h1>Dashboard</h1>
            <button className="settingsIcon">
                <div className="glyphicon glyphicon-cog"></div>
            </button>
            <label className="switch">
                
                <div className="slider "></div>
            </label>
            <table id="issueTable">
                <tr>
                    <th>Summary</th>
                    <th>Company</th>
                    <th>Created</th>
                </tr>
                <tr>
                    <td>
                        <div className="content">Unable to add new phone line</div>
                        <div className="editIcon">   <button className="glyphicon glyphicon-edit" /></div>
                    </td>
                    <td>AT&T</td>
                    <td>Today</td>
                </tr>
                <tr>
                    <td><div className="content">Xbox live account is diabled</div>
                        <div className="editIcon">  <button className="glyphicon glyphicon-edit" />
                            
                        </div></td>
                    <td>Microsoft</td>
                    <td>2 days ago</td>
                </tr>
            </table>
            <button className="newIssue">
                <div className="glyphicon glyphicon-plus-sign"></div>
            </button>
        </div>
    }
}
export default IssueList
import React,{Component} from 'react'
import Issue from './Issue'

class IssueList extends React.Component{
    render(){
        return<div>
        <h1>Dashboard</h1>
        <button className="settingsIcon">
         <span className="glyphicon glyphicon-cog"></span>    
        </button>
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
        <table id= "issueTable">
            <tr>
                <th>Summary</th>
                <th>Company</th>
                <th>Created</th>
            </tr>
            <tr>
                <td>Unable to add new phone line
                    <button>
                    <span class="editIcon" className="glyphicon glyphicon-edit"></span>    
                    </button>
                </td>
                <td>AT&T</td>
                <td>Today</td>
            </tr>
            <tr>
                <td>Xbox live account is diabled
                <button>
                    <span class="editIcon" className="glyphicon glyphicon-edit"></span>    
                    </button></td>
                <td>Microsoft</td>
                <td>2 days ago</td>
            </tr>
</table>
        <button className="newIssue">
         <span className="glyphicon glyphicon-plus-sign"></span>    
        </button>
    </div> 
    }
}
export default IssueList
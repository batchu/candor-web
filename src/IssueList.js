import React from 'react'

class IssueList extends React.Component {
    render() {
        return <div className="issue-list">
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <table id="issueTable">
                <tr>
                    <th>Summary</th>
                    <th>Company</th>
                    <th>Created</th>
                </tr>
                <tr>
                    <td>
                        <div className="content">Unable to add new phone line.<div className="editIcon"><button className="glyphicon glyphicon-edit" /></div></div>
                    </td>
                    <td>AT&T</td>
                    <td>Today</td>
                </tr>
                <tr>
                    <td>
                        <div className="content">Xbox live account is disabled. <div className="editIcon">  <button className="glyphicon glyphicon-edit" /></div>
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
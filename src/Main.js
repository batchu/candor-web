import React from 'react'
import IssueList from './IssueList'
import Login from './login/Login'
import Dashboard from './Dashboard'
import Settings from './Settings'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export default class Main extends React.Component {
    render() {
        return <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/login"}>Candor</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/login"}>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="main-wrapper">
                <Switch>
                    <Route path="/login" 
                    render = {
                        ({history})=> (
                            <Login {...this.props} history={history} />
                        )
                    }
                    />
                      
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
                </div>

            </div>

        </Router>
    }
}


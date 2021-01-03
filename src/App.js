import React,{Component} from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import Settings from './Settings'
import {BrowserRouter as Router,
Switch,
Route,
Link} from 'react-router-dom'

class App extends React.Component{

    render(){
        return <Router>
            <Switch>
                <Route path="login">
                    <Login />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="">
                    <Login />
                </Route>
            </Switch>
        </Router>
    }
}




export default App

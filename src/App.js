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
      
    </div>
            
        </Router>
    }
}




export default App

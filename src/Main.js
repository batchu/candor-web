import React, { Component } from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import Single from './Single'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { removePost } from './redux/actions'
class Main extends Component {

  constructor() {
    super()
  }

  componentDidMount(){
    this.props.startLoadingPost()
  }
  render() {
    return <Router>
      <div>
        <Title />
        <Switch>
          <Route path="/AddPhoto"
            render={
              ({ history }) => (

                <AddPhoto {...this.props} history={history} />

              )
            } />
          <Route path="/single/:id" render = {(params )=> (<Single {...this.props} {...params} />)}/>
          <Route path="/"
            render={
              () => (
                <PhotoWall {...this.props} />
              )
            }
          />
         

        </Switch>
      </div>
    </Router>
  }

}

export default Main

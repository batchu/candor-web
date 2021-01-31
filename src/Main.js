import  React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import {removePost} from './redux/actions'
class Main extends Component{

    constructor(){

        super()
       
    }

    render(){
       console.log(this.props)
     
        return   <Router>
      <div>
      <Title />
        <Switch>
        <Route  path="/AddPhoto" 
        render = {
            ({history})=>(
              
                    <AddPhoto onAddPhoto = {(post)=> {
                        this.onAddPhoto(post)
                        history.push('/')
                    }} />
                
            )
        }/>
          <Route path="/" 
          render = {
              ()=>(
                <PhotoWall {...this.props}/>
              )
          }
          />
         
        </Switch>
      </div>
    </Router>
    }

}

export default Main

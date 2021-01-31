import React, {Component} from 'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'
class Photowall extends Component{

    render(){
            //Iterate through each of the posts and render a Photo Component
            //The map function needs to "do something" on each of the array elements
        return <div>
            <Link className = "addIcon" to="/AddPhoto"> </Link> 
            <div className="photo-grid">
            {this.props.posts.sort((x,y)=>{
                return y.id-x.idnnnn
            }).map(
             (p,index) => <Photo post={p} key={index} {...this.props} /> 
               
            )}
        </div>
        </div>
    }
}

export default Photowall

/*
Main -> PhotoWall - Photo1, Photo2, Photo3, Photo4
*/
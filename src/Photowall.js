import React, {Component} from 'react'
import Photo from './Photo'
class Photowall extends Component{

    render(){
            //Iterate through each of the posts and render a Photo Component
            //The map function needs to "do something" on each of the array elements
        return <div>
            <a href="/AddPhoto" className="addIcon"></a>
            <div class="photo-grid">
            {this.props.posts.map(
             (p,index) => <Photo onRemovePhoto={this.props.onRemovePhoto} post={p} key={index} /> 
               
            )}
        </div>
        </div>
    }
}

export default Photowall

/*
Main -> PhotoWall - Photo1, Photo2, Photo3, Photo4
*/
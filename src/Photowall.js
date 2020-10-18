import React, {Component} from 'react'
import Photo from './Photo'
class Photowall extends Component{

    render(){
            //Iterate through each of the posts and render a Photo Component
            //The map function needs to "do something" on each of the array elements
        return <div class="photo-grid">
            {this.props.posts.map(
             (p,index) => <Photo onRemovePhoto={this.props.onRemovePhoto} post={p} key={index} /> 
               
            )}
        </div>
    }
}

export default Photowall
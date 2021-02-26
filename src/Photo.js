import React from 'react'
import {Link} from 'react-router-dom'
class Photo extends React.Component{

    render(){
        const post = this.props.post
        return <figure className="figure">
            <Link to={`/single/${post.id}`} >
            <img alt="Image" className="photo" src={post.imageLink}/></Link>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button 
                onClick={()=>{
                    this.props.removePost(this.props.post.id)
                }}
                >Remove</button>
            </div>
        </figure>
    }
}

export default Photo;
// Main -> Photowall (posts) -> multiple Photo (post)
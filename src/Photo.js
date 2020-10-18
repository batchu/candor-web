import React from 'react'

class Photo extends React.Component{

    render(){
        const post = this.props.post
        return <figure className="figure">
            <img className="photo" src={post.imageLink}/>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button"
                onClick={()=>{this.props.onRemovePhoto(post)}}
                >Remove</button>
            </div>
        </figure>
    }
}

export default Photo;
// Main -> Photowall (posts) -> multiple Photo (post)
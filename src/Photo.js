import React from 'react'

class Photo extends React.Component{

    render(){
        const post = this.props.post
        return <figure className="figure">
            <img className="photo" src={post.imageLink}/>
            <figcaption><p>{post.description}</p></figcaption>
        </figure>
    }
}

export default Photo;
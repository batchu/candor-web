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
                    this.props.startRemovingPost( this.props.post.id)
                    if(this.props.history)
                        this.props.history.push('/')
                }}
                >Remove</button>
                <Link className="button" to={`/single/${post.id}`}>
                    <div className="comment-count">
                        <div className="speech-bubble"></div>
                        {this.props.comments[post.id]? this.props.comments[post.id].length: 0}
                    </div>
                </Link>
            </div>
        </figure>
    }
}

export default Photo;
// Main -> Photowall (posts) -> multiple Photo (post)
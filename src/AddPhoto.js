import React from 'react'
import {withRouter  } from 'react-router-dom'
class AddPhoto extends React.Component{

    constructor()
    {
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        const link = e.target.elements.link.value
        const description = e.target.elements.description.value
        const post = {
            id:Number(new Date()),
            description:description,
            imageLink: link
        }
        if(link && description){
            this.props.addPost(post)
            this.props.history.push('/')

        }
        
    }
    render(){
        return <div className="form">
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder ="Link" name="link" />
                <input type="text" placeholder ="Description" name="description" />
                <button placeholder="Post">Post</button>
            </form>
        </div>
    }
}
export default withRouter(AddPhoto);
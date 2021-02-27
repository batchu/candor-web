import React, {Component} from 'react'

class Comments extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
            event.preventDefault()
            const comment = {id:Number(this.props.id),comment: event.target.elements.comment.value}
            this.props.addComment(comment)

    }
    render(){
        return <div className="comment">
           {
               this.props.comments[this.props.id] && this.props.comments[this.props.id].map((value,key)=>{
                return (<p key={key}>{value}</p>)
            })

           }
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input name = "comment" type="text" placeholder="comment" />
                    <input type="submit"/>
                </form>
        </div>
    }
}

export default Comments
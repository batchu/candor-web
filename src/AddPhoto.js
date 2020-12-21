import React, {Component} from 'react'
class AddPhoto extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
  console.log(e.target.elements.link.name)
        e.preventDefault()
    }
    render () {
        return (
            <div>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button>Post</button> 
                </form>
                </div>
            </div>
        )
    }
}
export default AddPhoto
import React, {Component} from 'react'
import ReactDom from 'react-dom'


class Header extends Component{

    render(){
        return <h1>Task List</h1>
    }
}

class Tasks extends Component{

    render(){

        const tasks = ['pay my bills', 'walk the dog', 'do the dishes', 'clean the floor', 'Watch tv', 'make dinner']
        return <ol>
           {tasks.map((t,index)=>React.createElement("li",{key:t+index},t))}
        </ol>
    }
}


class App extends Component{
    
    render(){
        return <div>
            <Header />
            <Tasks />
        </div>
     
    }
}

ReactDom.render(<App />,document.getElementById("root"))
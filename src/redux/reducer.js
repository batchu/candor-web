import posts from '../data/posts'

const postReducer = (state=posts, action)=> {
    console.log(action.id)
    switch(action.type){

        case 'REMOVE_POST':
            return state.filter((p)=>p.id!=action.id)
        
        case 'ADD_POST':
            return state.concat([action.post])

        default: 
            return state
    }
   
}

export default postReducer
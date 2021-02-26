import postsData from '../data/posts'
import {combineReducers} from 'redux'
/*
Job of a Reducer:
1. Input: Takes an action and the current state
2. Performs the Action on the state and creates a new copy of the state.
    It does NOT modify the current state but makes a fresh copy
3. Output: New state with modifications included 
*/
function posts(state=postsData, action) {
    switch(action.type){

        case 'REMOVE_POST':
            return state.filter((p)=>p.id!=action.payload)
        
        case 'ADD_POST':
            return state.concat([action.payload])
        case 'UPDATE_POST':
           //Create a new array called removedPostColl by removing the post to be updated
           /*
           array: 1,2,3
           updating: 1'
           need to create: 1',2,3
           removedPostColl: 2,3
           when we concat, we create a new collection with 1',2,3
           */
            const removedPostColl = state.filter((p)=>p.id!=action.payload.id)
            return state.concat([removedPostColl,action.payload])    

        default: 
            return state
    }
   
}

const comments = function comments(state=[], action){
    switch(action.type){
        case 'ADD_COMMENT': return state.concat(action.payload)
        default: return state
    }
}

const rootReducer = combineReducers({posts, comments})
export default rootReducer
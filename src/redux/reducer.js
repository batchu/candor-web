import {combineReducers} from 'redux'
 const user = (state={}, action)=>{

    switch(action.type){
        case 'user/login/google': return  {user:{...action.payload,type:'google'}}
        case 'user/login/facebook': return  {...action.payload,type:'facebook'}
        default: return state
            
    }
}

 const  settings = (state={}, action)=>{
    switch(action.type){
        case 'settings/update':
        default:
            return state
    }
}
const rootReducer = combineReducers({user, settings})
export default rootReducer
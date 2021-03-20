import {combineReducers} from 'redux'
 function userReducer(state={}, action){

    switch(action.type){
        case 'user/login': return {...state, user: {...action.payload}}
        default: return state
            
    }
}


 function settingsReducer(state={}, action){

    switch(action.type){
        case 'settings/update':
        default:
            return {...state, user: {...action.payload}}
    }
}
const rootReducer = combineReducers({userReducer, settingsReducer})
export default rootReducer
function userReducer(state={}, action){

    switch(action.type){
        case 'LOGIN_USER':
        default:
            return {...state, user: {...action.payload}}
    }
}

export default userReducer
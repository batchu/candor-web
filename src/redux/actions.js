export function loginUser(user){
    return {
        type: 'user/login',
        payload: user
    }
}

export function updateSettings(settings){
    return {
        type: 'settings/update',
        payload: settings

    }
}
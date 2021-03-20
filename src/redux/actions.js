export const  userLoginGoogle = (user)=> ( {
    type: 'user/login/google',
    payload: user
})

export const  userLoginFacebook = (user)=> ( {
    type: 'user/login/facebook',
    payload: user
})

export const  settingsUpdate= (settings)=> ({
    type: 'settings/update',
    payload: settings

})

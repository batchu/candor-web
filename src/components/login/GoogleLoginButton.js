import React from 'react'
import GoogleLogin from 'react-google-login'
import {withRouter  } from 'react-router-dom'
import CookieHelper from "../helpers/CookieHelper";

class GoogleLoginButton extends React.Component{
    constructor(){
        super()
        this.onSuccess = this.onSuccess.bind(this)
        this.onFailure = this.onFailure.bind(this)
      
    }
    onSuccess = (response) => {
        console.log(response)
        CookieHelper.set('access_token',response.accessToken, { path: '/' })
        this.props.userLoginGoogle(response.profileObj)
         this.props.history.push('/dashboard')
      }
    onFailure = (response) => {
        console.log(response)
      }

      render(){
          return   <GoogleLogin
          clientId="56807133055-ho9mcuc5efuc2r22vea0tn1tr19cp17i.apps.googleusercontent.com"
          render={renderProps => (
            <button className="loginBtn loginBtn--google" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</button>
          )}
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={'single_host_origin'}
        />
      }
}

export default GoogleLoginButton

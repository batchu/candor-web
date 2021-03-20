import React from 'react'
import GoogleLogin from 'react-google-login'
import {withRouter  } from 'react-router-dom'
import Cookies from 'universal-cookie';
class GoogleLoginButton extends React.Component{
   cookies = new Cookies()
    constructor(){
        super()
        this.onSuccess = this.onSuccess.bind(this)
        this.onFailure = this.onFailure.bind(this)
    }
    onSuccess = (response) => {
        console.log(response)
        this.cookies.set('access_token',response.accessToken, { path: '/' })
        this.props.ssdfsdf(response.profileObj)
        // this.props.history.push('/dashboard')
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

export default withRouter(GoogleLoginButton)
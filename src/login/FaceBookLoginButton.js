import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

export default class FaceBookLoginButton extends Component {

    responseFacebook=(resp)=>{
        console.log(resp)
    }

    render() {
       return <FacebookLogin
          
            appId="459636018789965"
            
            callback={this.responseFacebook}
            render={renderProps => (
                <button   className="loginBtn loginBtn--facebook" onClick={renderProps.onClick}>Facebook</button>
            )}
        />
    }
}

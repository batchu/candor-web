import React from 'react'
import GoogleLoginButton from './GoogleLoginButton'
import FaceBookLoginButton from './FaceBookLoginButton'



class Login extends React.Component {

  render() {

    return <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Login</h3>
          <FaceBookLoginButton {...this.props} />

          <GoogleLoginButton {...this.props} />
        </form>
      </div>
    </div>
  }
}

export default Login;

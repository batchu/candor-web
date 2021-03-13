import React from 'react'
import GoogleLoginButton from './GoogleLoginButton'



class Login extends React.Component {

  render() {

    return <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Login</h3>

          <button className="loginBtn loginBtn--facebook">
            Facebook
</button>

          <GoogleLoginButton {...this.props} />
        </form>
      </div>
    </div>
  }
}

export default Login;

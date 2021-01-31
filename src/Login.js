import React from 'react'



class Login extends React.Component {

    render (){

        return <div className="auth-wrapper">
        <div className="auth-inner">
        <form>
        <h3>Login</h3>

        <button class="loginBtn loginBtn--facebook">
  Login with Facebook
</button>

<button class="loginBtn loginBtn--google">
  Login with Google
</button>
    </form>
        </div>
      </div>
    }
}

export default Login;

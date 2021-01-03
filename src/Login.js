import React from 'react'



class Login extends React.Component {

    render (){

        return <form>
        <h3>Login</h3>

        <button class="loginBtn loginBtn--facebook">
  Login with Facebook
</button>

<button class="loginBtn loginBtn--google">
  Login with Google
</button>
    </form>
    }
}

export default Login;

import React from 'react';

const Login = ({ auth, toggleLogin, url }) => {
  let email;
  let password;

  return (
    <div className="center">
      <h2>Login</h2>  
      <form 
        onSubmit={ e => {
          e.preventDefault();
          fetch(`${url}/auth/sign_in`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email.value,
              password: password.value
            })
          }).then( res => {
            let token = res.headers.get('access-token');
            let email = res.headers.get('uid');
            let client = res.headers.get('client');
            auth({ token, email, client }) 
          })
        }}
      >
        <input
          ref={ n => email = n } 
          required
          placeholder="Email"
        />
        <input
          ref={ n => password = n } 
          required
          type="password"
          placeholder="Password"
        />
        <button className="btn">Log In</button>
        <br />
        <a href="#" onClick={toggleLogin}>Register</a>
      </form>
    </div>
  )
}

export default Login;

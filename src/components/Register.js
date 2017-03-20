import React from 'react';

const Register = ({ auth, toggleLogin, url }) => {
  let email;
  let password;
  let passwordConfirmation;

  return (
    <div className="center">
      <h2>Login</h2>  
      <form 
        onSubmit={ e => {
          e.preventDefault();
          fetch(`${url}/auth`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email.value,
              password: password.value,
              passwordConfirmation: passwordConfirmation.value
            })
          }).then( res => {
            toggleLogin()
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
        <input
          ref={ n => passwordConfirmation = n } 
          required
          type="password"
          placeholder="Password Confirmation"
        />
        <button className="btn">Register</button>
        <br />
        <a href="#" onClick={toggleLogin}>Login</a>
      </form>
    </div>
  )
}

export default Register;

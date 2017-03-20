import React from 'react';
import BASE_URL from '../url';
import Login from './Login';
import Register from './Register';

class Auth extends React.Component {
  state = { login: true }

  toggleLogin = () => {
    this.setState({ login: !this.state.login });
  }

  render() {
    return (
      <div className="container">
        { this.state.login ?
            <Login url={BASE_URL} auth={this.props.auth} toggleLogin={this.toggleLogin}/>
            :
            <Register url={BASE_URL} auth={this.props.auth} toggleLogin={this.toggleLogin} />
        }
      </div>
    )
  }
  
}

export default Auth;

import React from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import BoardContainer from './components/BoardContainer';
import Auth from './components/Auth';

class App extends React.Component {
  state = { user: {} }

  componentDidMount() {
    let id = localStorage.getItem('id');
    let email = localStorage.getItem('email');
    let client = localStorage.getItem('client');
    let token = localStorage.getItem('token');
    this.setUser({ id, client, token, email });  
  }

  setUser = (user) => { let { id, client, token, email } = user

    if (localStorage.token !== token) {
      localStorage.setItem('id', id)
      localStorage.setItem('client', client)
      localStorage.setItem('token', token)
      localStorage.setItem('email', email)
    }

    this.setState({ user })
  }

  logout = () => {
    ['id', 'email', 'client', 'token'].forEach( key => {
      localStorage.removeItem(key)
    });

    this.setState({ user: {} });
  }

  render() {
    let { user: { token } } = this.state;

    return (
      <Router>
        <div>
          <nav className="purple darken-1">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Logo</Link>
              <ul className="right">
							  <li><Link to="/">Home</Link></li>
                { token ?
                  [
                    <li key="boards"><Link to="/boards">Boards</Link></li>,
                    <li key="logout">
                      <a 
                        href="#" 
                        onClick={this.logout}
                      >
                        Logout
                      </a>
                    </li>
                  ] : null
                }
              </ul>
            </div>
          </nav>
          { this.state.user.token ?
            <div>
              <Route exact path="/" component={Home} />
              <Route 
                path="/boards" 
                render={(router) => <BoardContainer user={this.state.user} {...router} /> }
              />
            </div> :
            <Auth auth={this.setUser} />
          }
        </div>
      </Router>
    )
  }
}

export default App;

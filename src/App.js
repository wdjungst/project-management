import React from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import BoardContainer from './components/BoardContainer';

class App extends React.Component {
  state = { user: {} }

  login = () => {
    this.setState({ user: { isAuthenticated: true } });
  }

  logout = () => {
    this.setState({ user: {} });
  }

  render() {
    let { user: { isAuthenticated } } = this.state;

    return (
      <Router>
        <div>
          <nav className="purple darken-1">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Logo</Link>
              <ul className="right">
							  <li><Link to="/">Home</Link></li>
                { isAuthenticated ?
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
          { this.state.user.isAuthenticated ?
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/boards" component={BoardContainer} />
            </div> :
            <button className="center btn" onClick={this.login}>Log In</button>
          }
        </div>
      </Router>
    )
  }
}

export default App;

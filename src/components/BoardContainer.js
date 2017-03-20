import React from 'react';
import { Route } from 'react-router-dom';

import Boards from './Boards';
import Board from './Board';

import { API_URL } from '../url';

class BoardContainer extends React.Component {
  state = { boards: [] }

  componentDidMount() {
    fetch(`${API_URL}/boards`, {
      headers: this.headers()
    }).then( res => res.json() )
      .then( json => this.setState({ boards: json.boards }) );
  }

  headers = () => {
    let { user } = this.props;
    return {
      'Content-Type': 'application/json',
      'access-token': user.token,
      'client': user.client,
      'uid': user.email
    }
  } 

  addBoard = (name) => {
    fetch(`${API_URL}/boards`, {
      headers: this.headers(),
      method: 'POST',
      body: JSON.stringify({ board: { name } })
    }).then( res => res.json() )
      .then( json => { 
        let { board } = json;
        this.setState({ boards: [board, ...this.state.boards] });
      });
  }

  deleteBoard = (id) => {
    fetch(`${API_URL}/boards/${id}`, {
      method: 'DELETE',
      headers: this.headers()
    }).then( () => {
      this.setState( (state, props) => {
        return { boards: state.boards.filter( b => b.id !== id ) }
      })
    });
  }

  updateBoard = (id, name) => {
    fetch(`${API_URL}/boards/${id}`, {
      headers: this.headers(),
      method: 'PUT',
      body: JSON.stringify({ board: { name } })
    }).then( res => res.json() )
      .then( json => { 
        let { board } = json;
        this.setState( (state, props ) => {
          let boards = state.boards.map( b => {
            if (b.id === board.id)
              return board;
            return b;
          });
          
          return { boards }
        });
      })
  }

  render() {
    return (
      <div>
        <Route 
          exact 
          path="/boards" 
          render={ () => (
            <Boards boards={this.state.boards} addBoard={this.addBoard} deleteBoard={this.deleteBoard} updateBoard={this.updateBoard} /> 
          )} 
        />
        <Route
          path={`${this.props.match.url}/:id`}
          render={ (router) => <Board user={this.props.user} {...router} /> }
        />
      </div>
    )
  }
}

export default BoardContainer;

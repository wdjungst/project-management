import React from 'react';
import { Route } from 'react-router-dom';

import Boards from './Boards';
import Board from './Board';

class BoardContainer extends React.Component {
  state = { boards: [], id: 1 }
  
  addBoard = (name) => {
    let { id } = this.state;
    let board = { name, id }
    this.setState( (state, props) => {
      return {
        boards: [board, ...state.boards],
        id: state.id + 1
      }
    });
  }

  deleteBoard = (id) => {
    this.setState( (state, props) => {
      return { boards: state.boards.filter( b => b.id !== id ) }
    })
  }

  updateBoard = (board) => {
    this.setState( (state, props ) => {
      let boards = state.boards.map( b => {
        if (b.id === board.id)
          return board;
        return b;
      });

      return { boards }
    });
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
          render={ (router) => { 
            return (
              <Board id={router.match.params.id} boards={this.state.boards} />
            )
          }}
        />
      </div>
    )
  }
}

export default BoardContainer;

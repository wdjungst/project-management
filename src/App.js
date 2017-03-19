import React, { Component } from 'react';
import BoardForm from './components/BoardForm';
import BoardCard from './components/BoardCard';

class App extends Component {
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
    let boards = this.state.boards.map( (board) => {
      return (
        <BoardCard 
          key={board.id} 
          deleteBoard={this.deleteBoard}
          updateBoard={this.updateBoard}
          {...board} 
        />
      )
    });

    return (
      <div className="container">
        <h1 className="center">Project Boards</h1>
        <BoardForm addBoard={this.addBoard} />
        <div className="row">
          { boards }
        </div>
      </div>
    );
  }
}

export default App;

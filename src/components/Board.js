import React from 'react';
import { Link } from 'react-router-dom';

class Board extends React.Component {
  state = { board: {} }

  componentDidMount() {
    let { id, boards } = this.props;
    let board = boards.find( b => b.id === parseInt(id) );
    this.setState({ board });
  }

  render() {
    return (
      <div>
        <div className="center">
          <h2>{this.state.board.name}</h2>
          <Link to="/boards">Go Back</Link>
        </div>
      </div>
    )
  }
}

export default Board;

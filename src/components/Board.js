import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../url'
import ListContainer from './ListContainer';

class Board extends React.Component {
  state = { board: {}}

  componentDidMount() {
    let { match: { params: { id } } } = this.props
    fetch(`${API_URL}/boards/${id}`, {
      headers: this.headers()
    }).then( res => res.json() )
      .then( json => this.setState({ board: json.board }) )
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

  render() {
    return (
      <div>
        <div className="center container">
          <h2>{this.state.board.name}</h2>
          <Link to="/boards">Go Back</Link>
          { this.state.board.id ?
            <ListContainer boardId={this.state.board.id} user={this.props.user} />
            :
            <span>Loading...</span>
          }
        </div>
      </div>
    )
  }
}

export default Board;

import React from 'react';

import { API_URL } from '../url';
import ListForm from './ListForm';
import Lists from './Lists';

class ListContainer extends React.Component {
  state = { lists: [] }

  componentDidMount() {
    fetch(`${API_URL}/boards/${this.props.boardId}/lists`, {
      headers: this.headers()
    }).then( res => res.json() )
      .then( json => this.setState({ lists: json.lists }) );
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

  addList = (name) => {
    if (this.state.lists.length < 4) {
      fetch(`${API_URL}/boards/${this.props.boardId}/lists`, {
        method: 'POST',
        headers: this.headers(),
        body: JSON.stringify({ list: { name } })
      }).then( res => res.json() )
        .then( json => this.setState({ lists: [json.list, ...this.state.lists] }) )
    } else {
      alert('Only 4 lists per board')
    }
  }

  render() {
    return (
      <div>
        <ListForm addList={this.addList} />
        <Lists lists={this.state.lists} user={this.props.user} />
      </div>
    )
  }
}

export default ListContainer;

import React from 'react';
import { API_URL } from '../url';
import CardForm from './CardForm';
import Card from './Card';

class List extends React.Component {
  state = { cards: [] }

  componentDidMount() {
    fetch(`${API_URL}/lists/${this.props.id}/cards`, {
      headers: this.headers(),
    }).then( res => res.json() )
      .then( json => this.setState({ cards: json.cards }) )
  }

  addCard = (name, description) => {
    fetch(`${API_URL}/lists/${this.props.id}/cards`, {
      headers: this.headers(),
      method: 'POST',
      body: JSON.stringify({ card: { name, description } })
    }).then( res => res.json() )
      .then( json => this.setState({ cards: [json.card, ...this.state.cards] }) )
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
    let { id, name } = this.props;
    let cards = this.state.cards.map( card => {
      return <Card key={card.id} {...card} />
    });

    return (
      <div className="col s12 m3" key={id}>
        <h5>{name}</h5>
        <CardForm addCard={this.addCard} />
        { cards }
      </div>
    )
  }
}

export default List;

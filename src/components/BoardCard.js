import React from 'react';

class BoardCard extends React.Component {
  state = { editing: false }

  edit = () => {
    return (
      <input
        defaultValue={this.props.name}
        ref={ n => this.name = n }
      />
    )
  }

  show = () => {
    return (<span className="card-title">{this.props.name}</span>)
  }

  toggleEdit = () => {
    this.setState( (state, props) => {
      return { editing: !state.editing }
    });
  }

  render() {
    let {
      updateBoard,
      deleteBoard,
      id
    } = this.props

    return (
      <div className="col s12 m3">
        <div className="card purple darken-2">
          <div className="card-content white-text">
            { this.state.editing ? this.edit() : this.show() }
          </div>
          <div className="card-action">
            { this.state.editing ? 
              <div>
                <a href="#" onClick={this.toggleEdit}>Cancel</a>
                <a 
                  href="#" 
                  onClick={() =>  {
                    let board = { id, name: this.name.value }
                    updateBoard(board);
                    this.name = null;
                    this.toggleEdit();
                  }}
                >
                  Update
                </a>
              </div>
              :
              <div>
                <a href="#" onClick={this.toggleEdit}>Edit</a>
                <a href="#" onClick={() => deleteBoard(id)}>Delete</a>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default BoardCard;

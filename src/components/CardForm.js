import React from 'react';

const CardForm = ({ addCard }) => {
  let name;
  let description;
  let form;

  return (
    <form 
      ref={ n => form = n }
      onSubmit={ e => {
        e.preventDefault();
        addCard(name.value, description.value)
        form.reset();
      }}
    >
      <input ref={ n => name = n } placeholder="Name" required />
      <input ref={ n => description = n } placeholder="Description" required />
      <button className="btn">Add Card</button>
    </form>
  )
}

export default CardForm;

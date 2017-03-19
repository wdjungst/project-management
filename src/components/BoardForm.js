import React from 'react';

const BoardForm = ({ addBoard }) => {
  let name;
  let form;

  return (
    <form 
      ref={ n => form = n }
      onSubmit={ (e) => {
        e.preventDefault();
        addBoard(name.value);
        form.reset();
      }}
    >
      <label>Name:</label>
      <input
        ref={ n => name = n }
        required
      />
    </form>
  )
}

export default BoardForm;

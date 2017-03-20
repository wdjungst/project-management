import React from 'react';

const ListForm = ({ addList }) => {
  let form;
  let name;

  return (
    <form 
      ref={ n => form = n }
      onSubmit={ e => {
        e.preventDefault();
        addList(name.value);
        form.reset();
      }}
    >
      <input ref={ n => name = n } required />
    </form>
  )
}

export default ListForm;

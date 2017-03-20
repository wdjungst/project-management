import React from 'react';
import List from './List';

const Lists = ({ lists, user }) => (
  <div className="row">
    { lists.map( list => ( <List key={list.id} user={user} {...list} /> )) }
  </div>
)

export default Lists;

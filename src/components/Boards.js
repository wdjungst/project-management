import React, { Component } from 'react';
import BoardForm from './BoardForm';
import BoardCard from './BoardCard';

const Boards = ({ boards, addBoard, deleteBoard, updateBoard }) => (
  <div className="container">
    <h1 className="center">Project Boards</h1>
    <BoardForm addBoard={addBoard} />
    <div className="row">
      { boards.map( (board) => {
          return (
            <BoardCard 
              key={board.id} 
              deleteBoard={deleteBoard}
              updateBoard={updateBoard}
              {...board} 
            />
          )
        })
      }
    </div>
  </div>
);

export default Boards;

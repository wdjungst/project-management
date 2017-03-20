import React from 'react';

const Card = ({ id, name, description }) => (
  <div className="card">
    <div className="card-content">
      <span className="card-title">{name}</span>
      <p>{description}</p>
    </div>
  </div>
)

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="center">
    <h2>Project Managment</h2>
    <hr />
    <Link to="/boards">Project Boards</Link>
  </div>
)

export default Home;

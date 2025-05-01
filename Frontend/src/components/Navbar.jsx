import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h2>Pet Feeder</h2>
    <div>
      <Link to="/">Landing</Link>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;


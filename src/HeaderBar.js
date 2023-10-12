import React from 'react';
import './HeaderBar.css';
import { Link } from 'react-router-dom';

function HeaderBar() {
  return (
    <div className="header">
      <div className="logo">Your Logo</div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li> {/* Link to the login page */}
        </ul>
      </nav>
    </div>
  );
}

export default HeaderBar;


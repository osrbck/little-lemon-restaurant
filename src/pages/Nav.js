import React from 'react';
import logo from '../images/little-palm-logo.png';

function Nav() {
  return (
    <nav>
      <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

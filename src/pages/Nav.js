import React from 'react';
import logo from '../images/little-palm-logo.png';

function Nav() {
  return (
    <nav>
      <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
      <ul>
        <li><a href="/" className='nav-link'>Home</a></li>
        <li><a href="/menu" className='nav-link'>Menu</a></li>
        <li><a href="/reservations" className='nav-link'>Reservations</a></li>
        <li><a href="/contact" className='nav-link'>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

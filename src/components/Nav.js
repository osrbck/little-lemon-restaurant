import React from 'react';
import logo from '../assets/little-palm-logo.png';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <div className='leftSide'>
        <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
      </div>
      <div className='rightSide'>
        <Link to='/' className='nav-link'>HOME</Link>
        <Link to='/book' className='nav-link'>BOOK</Link>
      </div>
    </nav>
  );
}

export default Nav;

import React, { useState } from 'react'
import logo from '../images/little-palm-logo.png'
function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href='/' className='logo'>
            <img src={logo} style={{width:200}} alt='logo'/>
        </a>

        {/* mobile navbar */}
        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        {/* nav items */}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/order-online'>Order Online</a>
            </li>
            <li>
                <a href='/login'>Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
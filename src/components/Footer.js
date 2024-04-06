import React from 'react'
import logo from '../images/little-palm-logo.png'
function Footer() {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servered with a modern twist.</p>
                <img src={logo} alt='footer-logo'/>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>About</a></li>
                    <li><a href='/reservations'>Reservations</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Mersin, Turkey</li>
                    <li>+90 500 500 55 00</li>
                    <li>little@lemon.com</li>
                </ul>
            </div>

            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>Youtube</a></li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer
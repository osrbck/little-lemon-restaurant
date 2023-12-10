// Main.js
import React from 'react';
import heroImage from '../images/little-palm-hero.jpg';

function HomePage() {
  return (
    <main className="container">
      <div className="hero-content">
        <h1>Little Palm</h1>
        <h2>Fine Dining</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <img src={heroImage} alt="Hero Image" className="hero-image" />
    </main>
  );
}

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>PANTRY PING</h1>
        <h2>Your Attendant For Refreshment</h2>
        <p>Attention Busy Bees!</p>
        <p>
          Tired of waiting in line for your daily caffeine or refreshing drink?<br></br> Introducing PANTRY PING,<br></br>
          your one-stop shop for ordering beverages from our amazing cafeteria,<br></br> delivered straight to your desk!
        </p>
        {/* <h3>With Pantry Ping, you can:</h3>
        <br></br>
        <ul>
          <li><strong>Save Time</strong> </li>
          <li><strong>Boost Productivity</strong></li>
          <li><strong>Enjoy Convenience:</strong> Have your drink delivered right to your desk - focus on work, not waiting!</li>
        </ul> */}
        {/* <h3>Pantry Ping offers:</h3>
        <ul>
          <li>A wide variety of beverages: From hot coffee and tea to refreshing iced options and water, there's something for everyone.</li>
          <li>Easy-to-use platform: Our user-friendly website and app make ordering a breeze.</li>
          <li>Customization options: Add your customized needs with a few clicks.</li>
        </ul>
        <p>Say goodbye to wasted time and hello to a hassle-free beverage experience with Pantry Ping!</p> */}
        <div className="landing-buttons">
          <Link to="/login" className="landing-button">LOGIN</Link>
          <Link to="/signup" className="landing-button">SIGNUP</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

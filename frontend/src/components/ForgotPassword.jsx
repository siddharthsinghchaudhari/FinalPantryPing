import React, { useState } from 'react';
import axios from 'axios';
import "./ForgotPassword.css";
import coffeeCup from "../assets/login-cup.jpeg";


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error sending reset email:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="left-container">
          <img className="forgotPasswordImg" src={coffeeCup} alt="Cup of Coffee" />
        </div>
        <div className="right-outer-container">
          <div className="right-inner-container">
            <div className="top-details">
              <p className="heading">Forgot Password</p>
              <p className="desc">Enter your email to reset your password</p>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <div className="details-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button type="submit" className="btn forgot-password-btn">Send Reset Link</button>
            </form>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

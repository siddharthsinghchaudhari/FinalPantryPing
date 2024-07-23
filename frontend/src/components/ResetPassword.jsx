

import coffeeCup from "../assets/login-cup.jpeg";

import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "./ResetPassword.css";

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();
  const navigate = useNavigate(); // Ensure useNavigate is used here

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/reset-password/${token}`, { password });
      setMessage(response.data.message);
      navigate('/login');
    } catch (error) {
      console.error('Error resetting password:', error.response?.data);
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="left-container">
          <img className="resetPasswordImg" src={coffeeCup} alt="Cup of Coffee" />
        </div>
        <div className="right-outer-container">
          <div className="right-inner-container">
            <div className="top-details">
              <p className="heading">Reset Password</p>
              <p className="desc">Enter your new password</p>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <div className="details-container">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="details-container">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="form-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn reset-password-btn">Reset Password</button>
            </form>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

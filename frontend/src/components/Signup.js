
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import coffeeCup from "../assets/login-cup.jpeg";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await axios.post('http://localhost:5000/signup', { email, password });
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        console.error('Error signing up:', error);
        alert('An error occurred during signup. Please try again.');
      }
    }
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="left-container">
          <img src={coffeeCup} alt="Cup of Coffee" />
        </div>
        <div className="right-outer-container">
          <div className="right-inner-container">
            <div className="top-details">
              <p className="heading">Welcome</p>
              <p className="desc">
                Enter your details to create your account and start your journey
              </p>
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
              <div className="details-container">
                <label htmlFor="password">Password</label>
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
                <label htmlFor="confirmPassword">Re-enter Password</label>
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

              <button type="submit" className="btn login-btn">
                Create Account
              </button>
            </form>
            <p>Already have an account?</p> <a href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./Login.css";
import coffeeCup from "../assets/login-cup.jpeg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      localStorage.setItem('token', response.data.token);
      Swal.fire({
        title: 'Success!',
        text: 'Logged in successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/dashboard'); // Assuming you have a dashboard page
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Error logging in, please check your credentials or confirm your email by clicking link in email sent to you',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    Swal.fire({
      title: showPassword ? 'Password Hidden' : 'Password Shown',
      text: `Your password is now ${showPassword ? 'hidden' : 'visible'}.`,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="left-container">
          <img className="loginImg" src={coffeeCup} alt="Cup of Coffee" />
        </div>
        <div className="right-outer-container">
          <div className="right-inner-container">
            <div className="top-details">
              <p className="heading">Welcome Back</p>
              <p className="desc">Enter your account credentials to order!</p>
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
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <Link to="/forgot-password" className="forgot-password">Forgot your Password?</Link>
              <button type="submit" className="btn login-btn">Login</button>
            </form>
            <p className="noaccount">Don't have an account?</p> <a href="/signup"> Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

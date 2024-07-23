
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";  // Import SweetAlert2
import Card from "../components/Card";
import imgPhoto from "../assets/login-cup.jpeg";
import b_imgPhoto from "../assets/blackcoffe.jpg";
import t_imgPhoto from "../assets/tea.jpg";
import w_imgPhoto from "../assets/water.jpg";
import "./HomePage.css";

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/protected', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => {
          setIsAuthenticated(true);
          setUserEmail(response.data.email); // Assume email is sent back from the server
        })
        .catch(error => {
          console.error('Error verifying token:', error);
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!isAuthenticated) return null;

  const cardData = [
    {
      photo: imgPhoto,
      title: "Coffee",
      desc: "A rich and aromatic beverage made from roasted coffee beans.",
    },
    {
      photo: b_imgPhoto,
      title: "Black Coffee",
      desc: "Pure and bold coffee brewed without any additives.",
    },
    {
      photo: imgPhoto,
      title: "Strong Coffee",
      desc: "An intense and potent coffee with a higher caffeine kick.",
    },
    {
      photo: t_imgPhoto,
      title: "Tea",
      desc: "A versatile beverage made by steeping leaves, herbs, or spices.",
    },
    {
      photo: t_imgPhoto,
      title: "Strong Tea",
      desc: "A bold and concentrated infusion with a richer flavor.",
    },
    {
      photo: w_imgPhoto,
      title: "Water",
      desc: "A pure and refreshing essential drink for hydration.",
    },
  ];

  const handleCardClick = async (card) => {
    setLoading(true); // Set loading to true when card is clicked
    try {
      const response = await axios.post('http://localhost:5000/send-email', {
        userEmail,
        title: card.title,
        desc: card.desc
      });
      console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Order Placed',
        text: 'Sit back and relax, Your order is sent and it will be delivered shortly',
      });
    } catch (error) {
      console.error('Error sending email', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send email',
      });
    } finally {
      setLoading(false); // Set loading to false after processing is complete
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleViewOrderStatus = () => {
    navigate('/order-status');
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Beverage Delivery, at your desk!</h1>
        <p>Select your favourite drink. </p>
        <button onClick={handleLogout} className="logout-button">Logout</button>
        <button onClick={handleViewOrderStatus} className="order-status-button">View My Order Status</button>
      </header>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card
            key={index}
            photo={card.photo}
            title={card.title}
            desc={card.desc}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      {loading && <div className="loading-overlay">Processing your order...</div>}
    </div>
  );
};

export default HomePage;

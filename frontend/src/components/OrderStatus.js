import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./OrderStatus.css"

const OrderStatus = () => {
  const [orderStatus, setOrderStatus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get('http://localhost:5000/order-status', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        setOrderStatus(response.data.orders);
      })
      .catch(error => {
        console.error('Error fetching order status:', error);
        navigate('/login');
      });
  }, [navigate]);

  return (
    <div className="order-status-container">
      <h2>My Order Status</h2>
      <ul>
        {orderStatus.map((order, index) => (
          <li key={index}>
            <p>Title: {order.title}</p>
            <p>Description: {order.desc}</p>
            <p>Status: {order.status}</p>
            <p>Date and Time: {new Date(order.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatus;

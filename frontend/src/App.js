
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/defaultStyle.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import Card from "./components/Card";
import Dashboard from "./pages/HomePage";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import OrderStatus from "./components/OrderStatus";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
        <Route path="/card" element={<Card />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/order-status" element={<OrderStatus />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

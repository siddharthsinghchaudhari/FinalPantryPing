import React from "react";
import "./Card.css";

const Card = ({ title, photo, desc, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={photo} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;

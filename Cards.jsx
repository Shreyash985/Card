import React from "react";
import card from "./Cards.json";
import "./Cards.css";

const Cards = () => {
  return (
    
    <section className="blog-grid">
      {card.map((post) => (
        <div className="blog-card" key={post.id}>
          <img src={post.image} alt={post.title} />
          <div className="blog-content">
            <h3>{post.title}</h3>
            <p>{post.text}</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>
      ))}
    </section>
  
  );
};

export default Cards;

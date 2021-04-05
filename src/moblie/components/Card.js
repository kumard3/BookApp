import React from "react";
import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpeg";
import book3 from "../images/book3.jpeg";
import book4 from "../images/book4.jpeg";
import Book5 from "../images/Book5.jpeg";
import book6 from "../images/book6.jpg";
import book7 from "../images/book7.jpeg";

import './Card.css'
function Card() {
  return (
    <div className="card">
      <div className="card__main">
      <img className="card__img" src={book1} alt="book" />
      <img className="card__img" src={book2} alt="book" />
      <img className="card__img" src={book3} alt="book" />
      <img className="card__img" src={book4} alt="book" />
      <img className="card__img" src={Book5} alt="book" />
      <img className="card__img" src={book6} alt="book" />
      <img className="card__img" src={book7} alt="book" />
      </div>
    </div>
  );
}

export default Card;

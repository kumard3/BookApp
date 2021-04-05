import React from "react";
import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpeg";
import book3 from "../images/book3.jpeg";
import book4 from "../images/book4.jpeg";
import Book5 from "../images/Book5.jpeg";
import book6 from "../images/book6.jpg";
import book7 from "../images/book7.jpeg";
import "./Bookcard.css";
function BookCard() {
  return (
    <div className="bookcard">
      <div className="bookcard__main">
        <div className="bookcard__content">
          <img className="card__img book" src={book1} alt="book" />
          <div className="card__innercontent">
            <h3 className="bookcard__text"> The Lord of the Rings</h3>
            <p>Rupert Carter</p>
          </div>
        </div>
        <div className="bookcard__content">
          <img className="card__img book" src={book1} alt="book" />
          <div className="card__innercontent">
            <h3 className="bookcard__text"> The Lord of the Rings</h3>
            <p>Rupert Carter</p>
          </div>
        </div>
        <div className="bookcard__content">
          <img className="card__img book" src={book1} alt="book" />
          <div className="card__innercontent">
            <h3 className="bookcard__text"> The Lord of the Rings</h3>
            <p>Rupert Carter</p>
          </div>
        </div>
        <div className="bookcard__content">
          <img className="card__img book" src={book1} alt="book" />
          <div className="card__innercontent">
            <h3 className="bookcard__text"> The Lord of the Rings</h3>
            <p>Rupert Carter</p>
          </div>
        </div>
        <div className="bookcard__content">
          <img className="card__img book" src={book1} alt="book" />
          <div className="card__innercontent">
            <h3 className="bookcard__text"> The Lord of the Rings</h3>
            <p>Rupert Carter</p>
          </div>
        </div>
        <div className="bookcard__content">
          <img className="card__img book" src={book1} alt="book" />
          <div className="card__innercontent">
            <h3 className="bookcard__text"> The Lord of the Rings</h3>
            <p>Rupert Carter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

import React from "react";
import "./Footer.css";
import search from './icons/search.svg'
function Footer() {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__content">
        <img className="icons" src={search} alt="icon"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;

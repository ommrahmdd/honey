import React from "react";
import contact from "./../../assets/contact.jpg";
export default function Contact() {
  return (
    <div className="contact seciton__padding">
      <div className="contact__left">
        <img src={contact} alt="contact" />
      </div>
      <div className="contact__right">
        <h5 className="contact__right-title">Contact Us</h5>
        <div className="contact__right-links">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-google"></i>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import aboutImg from "./../../assets/about_section.jpg";
export default function About() {
  return (
    <section className="aboutSection seciton__padding">
      <div className="section__title">about</div>
      <div className="aboutSection__content">
        <div
          className="aboutSection__left"
          style={{
            backgroundImage: `url(${aboutImg})`,
          }}
        >
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className="aboutSection__right">
          <h5>About Product</h5>
          <h3>The Original honey</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            alias, modi rem totam culpa doloremque molestias a aliquam quibusdam
            pariatur magni natus eum esse nihil, animi labore facere vero autem!
          </p>
          <button className="btn primaryBtn">Read More</button>
        </div>
      </div>
    </section>
  );
}

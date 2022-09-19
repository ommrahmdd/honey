import React from "react";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Original from "../../components/original/Original";
import OurProducts from "../../components/ourProducts/OurProducts";
import Video from "../../components/video/Video";
import headerImage from "./../../assets/home_header.jpg";
export default function Home() {
  return (
    <div className="homePage">
      <div className="container">
        {/*START --------------------- STYLE: HEADER */}
        <header className="homePage__header">
          <div className="header__left">
            <h3>Honey is the best stomack friend</h3>
            <h4>The best types of original honey</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              voluptas, quod deleniti sed voluptatem officiis aspernatur tempora
              odio ex.
            </p>
            <button className="btn primaryBtn">Shop Now</button>
          </div>
          <div className="header__right">
            <div className="header__right-imgBox">
              <img src={headerImage} alt="header image" />
            </div>
          </div>
        </header>
        {/*END --------------------- STYLE: HEADER */}
        <About />
        <Original />
        {/* <Video /> */}
        <OurProducts />
        <Contact />
      </div>
    </div>
  );
}

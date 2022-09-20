import React from "react";
import product_1 from "./../../assets/product_1.png";
import product_2 from "./../../assets/product_2.png";
import product_3 from "./../../assets/product_3.png";
import product_4 from "./../../assets/product_4.png";
import gallery_1 from "./../../assets/gallery_1.jpg";
import gallery_2 from "./../../assets/gallery_2.jpg";
import gallery_3 from "./../../assets/gallery_3.jpg";
export default function OurProducts() {
  return (
    <>
      <section className="ourProducts seciton__padding">
        <div className="section__title">Our Products</div>
        <div className="ourProducts__content">
          <div className="ourProducts__content-box">
            <div className="box__imgBox">
              <img src={product_1} alt="product" />
            </div>
            <h5>Organic Honey</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              debitis consectetur est expedita architecto.
            </p>
            <button className="btn primaryBtn">View More</button>
          </div>
          <div className="ourProducts__content-box">
            <div className="box__imgBox">
              <img src={product_2} alt="product" />
            </div>
            <h5>Organic Honey</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed vel.
            </p>
            <button className="btn primaryBtn">View More</button>
          </div>
          <div className="ourProducts__content-box">
            <div className="box__imgBox">
              <img src={product_3} alt="product" />
            </div>
            <h5>Organic Honey</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed vel.
            </p>
            <button className="btn primaryBtn">View More</button>
          </div>
          <div className="ourProducts__content-box">
            <div className="box__imgBox">
              <img src={product_4} alt="product" />
            </div>
            <h5>Organic Honey</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed vel.
            </p>
            <button className="btn primaryBtn">View More</button>
          </div>
        </div>
      </section>
      <section className="gallery seciton__padding">
        <div className="gallery__imgBox">
          <img src={gallery_1} alt="gallery image" />
        </div>
        <div className="gallery__imgBox">
          <img src={gallery_2} alt="gallery image" />
        </div>
        <div className="gallery__imgBox">
          <img src={gallery_3} alt="gallery image" />
        </div>
      </section>
    </>
  );
}

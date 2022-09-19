import React from "react";
import honey_1 from "./../../assets/honey_1.png";
import honey_2 from "./../../assets/honey_2.png";
import honey_3 from "./../../assets/honey_3.png";
export default function Original() {
  return (
    <section className="original section__padding">
      <div className="section__title">The Original Honey</div>
      <div className="original__content">
        <div className="original__content-box">
          <img src={honey_1} alt="honey photo" />
          <h5>Natural Honey</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quas.
          </p>
        </div>
        <div className="original__content-box">
          <img src={honey_2} alt="honey photo" />
          <h5>Organic Honey</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quas.
          </p>
        </div>
        <div className="original__content-box">
          <img src={honey_3} alt="honey photo" />
          <h5>Forest Honey</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quas.
          </p>
        </div>
      </div>
    </section>
  );
}

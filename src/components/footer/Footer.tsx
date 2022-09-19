import React from "react";
import footer from "./../../assets/about_section.jpg";
export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footer})`,
      }}
    >
      <div className="footer__overlay"></div>
      <p>&copy; 2022. All Rights Reversed</p>
    </footer>
  );
}

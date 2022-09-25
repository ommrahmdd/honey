import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  handleCloseOverlay,
  handleCloseProfileDash,
  handleOpenOverlay,
  handleOpenProfileDash,
} from "./navbar_utilities";
import logo from "./../../assets/logo.png";
import searchIcon from "./../../assets/searchIcon.png";
import profileIcon from "./../../assets/profileIcon.png";
import menuIcon from "./../../assets/menuIcon.png";
import bagIcon from "./../../assets/bagIcon.png";
import closeIcon from "./../../assets/closeIcon.png";
import bee from "./../../assets/loading_bee.png";
import { fromLeft, toLeft } from "../../utilities/transition";
import { userLogout } from "../../firebase/users";
export default function Navbar() {
  let history = useHistory();

  let handleHistory = (page: string) => {
    fromLeft(document.querySelector(".pageOverlay"));
    setTimeout(() => {
      history.push(page);
    }, 500);

    setTimeout(() => {
      toLeft(document.querySelector(".pageOverlay"));
    }, 900);
  };
  let handleProfile = () => {
    if (localStorage.getItem("honey_user")) {
      handleOpenProfileDash(document.querySelector(".profileDash"));
    } else {
      history.push("/login");
    }
  };

  return (
    <nav className="navbar">
      {/* STYLE: loading overlay */}
      <div className="pageOverlay">
        <img src={bee} alt="bee" />
      </div>
      {/*--------------------------- START STYLE: profile dashboard */}
      <div
        className="profileDash"
        onClick={() =>
          handleCloseProfileDash(document.querySelector(".profileDash"))
        }
      >
        <div className="profileDash__content">
          <h3>My Products</h3>
          <h3
            onClick={() => {
              userLogout();
              window.location.reload();
            }}
          >
            Logout
          </h3>
        </div>
      </div>
      {/*--------------------------- END STYLE: profile dashboard */}
      {/*--------------------------- START STYLE: Menu */}
      <div
        className="menu"
        onClick={() => {
          handleCloseOverlay(document.querySelector(".menu"));
        }}
      >
        <img
          src={closeIcon}
          alt="close"
          className="closeIcon"
          onClick={() => {
            handleCloseOverlay(document.querySelector(".menu"));
          }}
        />
        <img src={logo} alt="overlay" className="menu__overylay" />
        <div className="menu__content">
          <h3 onClick={() => handleHistory("/")}>Home</h3>
          <h3 onClick={() => handleHistory("/about")}>About Us</h3>
          <h3 onClick={() => handleHistory("/shop")}>Shop</h3>
          <h3 onClick={() => handleHistory("/blog")}>Blog</h3>
          <h3 onClick={() => handleHistory("/contact")}>Contact</h3>
        </div>
      </div>
      {/*--------------------------- END STYLE: Menu */}

      <div className="container">
        <div className="navbar__content">
          <div className="logo">
            <img src={logo} alt="logo" onClick={() => handleHistory("/")} />
          </div>
          <div className="navbar__content-links">
            <img src={searchIcon} alt="search" />
            <img src={profileIcon} alt="profile" onClick={handleProfile} />
            <img
              src={bagIcon}
              alt="bag"
              onClick={() => handleHistory("/cart")}
            />
            <img
              src={menuIcon}
              alt="menu"
              onClick={() => {
                handleOpenOverlay(document.querySelector(".menu"));
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

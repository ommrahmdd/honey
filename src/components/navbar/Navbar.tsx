import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { handleCloseOverlay, handleOpenOverlay } from "./navbar_utilities";
import logo from "./../../assets/logo.png";
import searchIcon from "./../../assets/searchIcon.png";
import profileIcon from "./../../assets/profileIcon.png";
import menuIcon from "./../../assets/menuIcon.png";
import bagIcon from "./../../assets/bagIcon.png";
import closeIcon from "./../../assets/closeIcon.png";
export default function Navbar() {
  let history = useHistory();

  return (
    <nav className="navbar">
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
          <h3 onClick={() => history.push("/")}>Home</h3>
          <h3 onClick={() => history.push("/about")}>About Us</h3>
          <h3 onClick={() => history.push("/")}>Shop</h3>
          <h3 onClick={() => history.push("/blog")}>Blog</h3>
          <h3 onClick={() => history.push("/")}>Contact</h3>
        </div>
      </div>
      <div className="container">
        <div className="navbar__content">
          <div className="logo">
            <img src={logo} alt="logo" onClick={() => history.push("/")} />
          </div>
          <div className="navbar__content-links">
            <img src={searchIcon} alt="search" />
            <img src={profileIcon} alt="profile" />
            <img src={bagIcon} alt="bag" />
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

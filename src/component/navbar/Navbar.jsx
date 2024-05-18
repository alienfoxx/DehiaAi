import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assests/logo.svg";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        {/* <div className="app__navbar-links_logo">
          <h2>Dehia.ai</h2>
        </div> */}
        <div className="app__navbar-links__container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wdehia">What is Dehia</a>
          </p>
          <p>
            <a href="#possibility">Dehia AI</a>
          </p>
          <p>
            <a href="#features">Case studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="app__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

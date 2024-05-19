import React from "react";
import "./footer.css";
import gpt3Logo from "../../assests/logo.svg";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="app__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="app__footer-links">
        <div className="app__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="app__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="app__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="app__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="app__footer-copyright">
        <p>
          Made with Passion By{" "}
          <a className="gradient__text" href="https://github.com/alienfoxx">
            AlienFoxx
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./cta.css";

const CallToAction = () => {
  return (
    <div className="app__cta">
      <div className="app__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="app__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CallToAction;

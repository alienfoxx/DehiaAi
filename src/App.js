import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  Header,
  WhatDehia,
} from "./containers";
import { CallToAction, Brand, Navbar } from "./component";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <WhatDehia/>
      <Features/>
      <Possibility/>
      <CallToAction/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default App;

import React from 'react'
import './whatDehia.css'
import { Feauture } from '../../component'

const WhatDehia = () => {
  return (
    <div className="app__whatgpt3 section__margin" id='wgpt3'>
      <div className="app__whatgpt3-feature">
        <Feauture/>
      </div>
      <div className="app__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="app__whatgpt3-container">
        <Feauture/>
        <Feauture/>
        <Feauture/>
      </div>
    </div>
  )
}

export default WhatDehia
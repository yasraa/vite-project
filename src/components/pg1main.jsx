
import React, { useState } from "react";
import './page1-main.css'
import Navbar from './navbar'
import Education from './education'
import Projects from './projects'
import About from './about'
import Reviews from './reviews'
import Contact from "./contact";


const pg1main = () => {
  
   
  return (
    <div>
      <div id="scrollableDiv" className="onm"
      style={{
        height: "100vh",
        overflowY: "auto",
        position: "relative",
      }}>
      <Navbar/>
    <About/>
 
    <Education/>
    
      <Projects/>
     
      <Reviews/>
      <Contact/>
  </div>
  </div>
  
// </div>
      
   
   
    

  )
}

export default pg1main


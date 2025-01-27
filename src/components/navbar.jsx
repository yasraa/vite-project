// import React, { useEffect } from 'react';
import './navbar.css'

import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const container = document.getElementById("scrollableDiv");
    const target = document.getElementById(sectionId);

    if (container && target) {
      const start = container.scrollTop;
      const end = target.offsetTop - container.offsetTop;
      const duration = 1000; // duration in milliseconds
      const startTime = performance.now();

      const smoothScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // cap progress at 1
        const easeInOutQuad = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2; // easing function
        container.scrollTop = start + (end - start) * easeInOutQuad;

        if (elapsed < duration) {
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
    }
  };
  return (
    <div>
    <nav style={{ position: "fixed", top: 0, right: 0, zIndex: 1000, display:"flex" }} className="navbar">
     <ul>
      <li><button onClick={() => scrollToSection("section1")}>About me</button></li>
      <li> <button onClick={() => scrollToSection("section2")} >
        Experience
      </button></li>
      <li> <button onClick={() => scrollToSection("section3")}>Projects</button></li>
      <li> <button onClick={() => scrollToSection("section4")}>Reviews</button></li>
      </ul>
      <button className='btn-nav' onClick={() => scrollToSection("section5")} >Let's talk</button>
    </nav>
    </div>
  );
};

export default Navbar;

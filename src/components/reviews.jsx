import React from 'react'
import './page1-main.css'
const reviews = () => {
  return (
    <div name="reviews" className='review' id="section4">
      <div className="r-main">
        <h1>What I Can Do For You!</h1>
        <div className="sides">
          <div className="side1">
            <div className="box">
            <h2>web animation and interactivity</h2>
            <p>I bring static designs to life with smooth animations and dynamic interactions, creating immersive experiences that keep users engaged.</p>
            </div>
            <div className="box">
              <h2> Branding & Visual Design</h2>
              <p>I design cohesive branding materials, including logos, color palettes, and typography, that communicate your brand’s story effectively</p>
            </div>
          </div>
          <div className="side2">
            <div className="box">
              <h2>Custom Solutions</h2>
              <p>Every project is unique, and I take the time to understand your vision and goals. 
                 I offer flexible services that are tailored to your specific requirements.</p>
            </div>
            <div className="box"> 
              <h2>
              Designing User-Centric Interfaces
              </h2>
              <p>
              With a focus on user experience,  I create intuitive and visually appealing designs that elevate brand identity and improve usability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default reviews


import React, { useState } from "react";
import './page1-main.css';

import htmlImg from './assets/html.png';
import cssImg from './assets/css-3.png';
import jsImg from './assets/js.png';
import tailwindImg from './assets/tailwind.png';
import reactImg from './assets/react.png';
import wordpressImg from './assets/wordpress.png';
import bootstrapImg from './assets/bootstrap.png';
import gitImg from './assets/git.png';


function Education() {
  const [activeDiv, setActiveDiv] = useState(1);

  const imageData = [
    { id: 1, url: htmlImg, title: "HTML", style: { width: '75%'}, per:'75%'},
    { id: 2, url: cssImg, title: "CSS" ,style: { width: '75%'}, per:'75%'},
    { id: 3, url: jsImg, title: "Javascript" ,style: { width: '75%'}, per:'75%'},
    { id: 4, url: bootstrapImg, title: "Bootstrap" ,style: { width: '75%'}, per:'75%'},
    { id: 5, url: reactImg, title: "React",style: { width: '75%'}, per:'75%' },
    { id: 6, url: wordpressImg, title: "Wordpress" ,style: { width: '75%'}, per:'75%'},
    { id: 7, url: tailwindImg, title: "Tailwind" ,style: { width: '75%'}, per:'75%'},
    { id: 8, url: gitImg, title: "Github" ,style: { width: '75%'}, per:'75%'},
  ];

  return (
    <div className="education" name="education" id="section2">
      <div className="button-container">
        <h1>My Toolkit!</h1>
        <div className="jjk">
        <button onClick={() => setActiveDiv(1)}   style={{
             borderBottom: activeDiv === 1 ? "2px solid rgba(240, 210, 249, 1) " : "2px solid transparent",
            color: activeDiv === 1 ? "rgba(240, 210, 249, 1) " : "rgb(154, 201, 255)",
          }}>Development</button>
        <button onClick={() => setActiveDiv(2)}  style={{
            borderBottom: activeDiv === 2 ? "2px solid rgba(240, 210, 249, 1) " : "2px solid transparent",
            color: activeDiv === 2 ? "rgba(240, 210, 249, 1) " : "rgb(154, 201, 255)",
          }}>Designing</button>
          </div>
      </div>

      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(${activeDiv === 1 ? "0" : "-50%"})`,
          }}
        >
          <div className="slide">
            <div className="ainer">
            {imageData.map((image) => (
              <div key={image.id} >
                <div className="kkj">
                <img src={image.url} alt={image.title} className="devimg" />
                <p>{image.title}</p>
                <div className="bar"><div className="prog-bar">
                <div className="main-progbar"
                          style={{
                            width: image.style.width, // Set width dynamically based on imageData
                          }}
                        ></div>
                  </div>
                  <div className="percentage">{image.per}</div></div>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className="slide">
            <p>Content of Div 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

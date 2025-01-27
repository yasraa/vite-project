import React from 'react'
import './card.css'
import CardImg from './assets/card.png';

const Card = () => {
  return (
    <div>
      <div className="sidesticky">
      <div className="cardm">
      <h1 className ="name">Yasra <br /> Kashif</h1>
      <img src={CardImg} alt="Card" />

        <div className="abt-me">
       <h4 className='h-4'>What i do!</h4> 
         <p className='f-d'>Frontend Developer</p> <p className='u-d'>UI/UX Designer</p>
        <h5 className='h-5'>Location</h5>
        <p className='c-d'>Karachi, Pakistan.</p>
        </div>

        <div className="social-link">
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>        
      </div>
      <button className="btn-card">Lets Work Together!</button>
    </div>
    </div>
    </div>
  )
}

export default Card

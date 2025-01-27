import React from 'react'
import './page1-main.css'
const contact = () => {
  return (
    <div id='section5' className='contact'>
      <p>Submit the form below to get in touch with me!</p>
     <div className='forms'>
        <form action="https://getform.io/f/amddvmzb" method='POST' className='flex flex-col justify-center items-center'>
          <input type="text" name='name' placeholder='Enter your name' />
          <input type="text" name='email' placeholder='Enter your email' />
         
          <textarea name="Message" rows={10} placeholder='Enter your message!' className='p-3'></textarea>
          
          <button className='cont-btn'>Submit!</button>
     
        </form>
        </div>
    </div>
  )
}

export default contact
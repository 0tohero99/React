import React from 'react'
import "./header.css";
 const Header = () => {

  return (
    <header>
      <div id="brand">New Learner !</div>
      <div id="social">
        <a href="#">
          <img src="https://i.ibb.co/WHnC6VW/download.png"alt='yt' className='socialIcon' />
        </a>
        <a href="#">
          <img src="https://i.ibb.co/6mZHctV/fb.png" alt='fb'  className='socialIcon'/> 
        </a>
        <a href="#">
          <img src="https://i.ibb.co/QcP9KMZ/insta.jpg" alt='inta'  className='socialIcon'/> 
        </a>
      </div>
    </header>
  )
}

export default Header;
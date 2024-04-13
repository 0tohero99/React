import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
 const Header = () => {

  return (
    <header>
      <div id="brand">New Learner !</div>
      <div id="social">
        <Link href="#">
          <img src="https://i.ibb.co/WHnC6VW/download.png"alt='yt' className='socialIcon' />
        </Link>
        <Link href="#">
          <img src="https://i.ibb.co/6mZHctV/fb.png" alt='fb'  className='socialIcon'/> 
        </Link>
        <Link href="#">
          <img src="https://i.ibb.co/QcP9KMZ/insta.jpg" alt='inta'  className='socialIcon'/> 
        </Link>
      </div>
    </header>
  )
}

export default Header;
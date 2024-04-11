import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <h3> &copy; new learner !</h3>
            <div className='footdiv noborder'>
                <ul>
                    <li>contact  </li>
                    <li>work here ! </li>
                </ul>
            </div>
            <div className='footdiv'>
                <ul>
                    <li>About </li>
                    <li>Bike On Rent !</li>
                </ul>
            </div>
            <div className='footdiv'>
                <ul>
                    <li>Notice</li>
                    <li>Collaborate</li>
                </ul>
            </div>
            <div id="socialFoot">
                <a href="#">
                    <img src="https://i.ibb.co/WHnC6VW/download.png" alt='yt' className='socialIcon' />
                </a>
                <a href="#">
                    <img src="https://i.ibb.co/6mZHctV/fb.png" alt='fb' className='socialIcon' />
                </a>
                <a href="#">
                    <img src="https://i.ibb.co/QcP9KMZ/insta.jpg" alt='inta' className='socialIcon' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <h3>&copy; New Learner @ 2024.</h3>
            <div className="footdiv ">
                <ul>
                    <li>Contact .</li>
                    <li>Complaints .</li>
                </ul>
            </div>
            <div className="footdiv ">
                <ul>
                    <li>Work here !</li>
                    <li>Notice .</li>
                </ul>
            </div>
            <div className="footdiv">
                <ul>
                    <li>Bike on rent !</li>
                    <li>About .</li>
                </ul>
            </div>
            <div className="socialFoot">
                <Link to="#">
                    <img src="https://i.ibb.co/TTp516h/facebook.png" alt="fb"
                        className="socialIcon" />
                </Link>
                <Link to="#">
                    <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="fb"
                        className="socialIcon" />
                </Link>
                <Link to="#">
                    <img src="https://i.ibb.co/4jxsYSP/yt3.png" alt="fb"
                        className="socialIcon" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer;
 
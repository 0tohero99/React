import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div id="brand">
                Developer Funnel &nbsp;
                <Link className="btn btn-info" to="/" style={{fontSize:"9px"}}>Home</Link>
            </div>
            <div id="social">
                <Link to=" ">
                    <img src="https://i.ibb.co/TTp516h/facebook.png" alt="fb"
                        className="socialIcon" />
                </Link>
                <Link to=" ">
                    <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="fb"
                        className="socialIcon" />
                </Link>
                <Link to=" ">
                    <img src="https://i.ibb.co/4jxsYSP/yt3.png" alt="fb"
                        className="socialIcon" />
                </Link>
            </div>
        </header>
    )
}
export default Header;


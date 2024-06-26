import React from "react";
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
    return (
        <header>
            <nav  className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className ="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">New Learner</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Homes</Link> </li>
                            <li><Link to="/post">Post</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="#"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li><Link to="#"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;
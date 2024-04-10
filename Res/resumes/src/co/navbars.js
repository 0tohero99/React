import React from 'react'
import { Link } from 'react-router-dom';
import "./App.css";

const navbars = () => {
    return (
        <>
            <div className="container">
                <div className="brand">portsfolio</div>
                <div className="link">
                    <Link to="#" className="nav_items">Home</Link>
                    <Link to="#" className="nav_items">Expireance</Link>
                    <Link to="" className="nav_items">Projects</Link>
                    <Link to="" className="nav_items">Skills</Link>
                    <Link to="" className="nav_items">Contacts</Link>
                </div>
            </div>
        </>
    )
}

export default navbars

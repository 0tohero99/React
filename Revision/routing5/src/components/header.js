import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
const header = () => {
    return (
        <header style={{ backgroundColor: "green", color: "wheat" }}>
            <h1 style={{ margin:"0",textAlign: "center" }}>React :</h1>
            <div style={{ display:"flex",justifyContent:"space-evenly",color: "wheat",alignItems:"center"}}>
                <Link to="/" style={{color:"wheat",fontSize:"17px"}}>Home</Link>
                <Link to="/post"style={{color:"wheat",fontSize:"17px"}}>Post</Link>
                <Link to="/profile"style={{color:"wheat",fontSize:"17px"}}>Profile</Link>
            </div>
        </header>
    )
}

export default header

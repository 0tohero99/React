import React from "react";
import { Link } from "react-router-dom";
const Headers = () => {
    return (
        <header style={{ backgroundColor: "green" ,height:"35px"}}>
             <div style={{float:"left",fontSize:"23px",fontWeight:"700"}}>New Learner</div>
             <Link to="/" >Homes</Link>
        </header>

    )
}
export default Headers;
